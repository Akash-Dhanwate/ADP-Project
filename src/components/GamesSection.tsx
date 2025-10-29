import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const villains = ['Thanos', 'Ultron', 'Mandarin', 'Whiplash', 'Obadiah Stane'];

const FightGame: React.FC = () => {
  const [selectedVillain, setSelectedVillain] = useState<string>('');
  const [health, setHealth] = useState(100);
  const [villainHealth, setVillainHealth] = useState(100);
  const [message, setMessage] = useState('Select a villain to fight!');
  const [score, setScore] = useState(0);

  const selectVillain = (villain: string) => {
    setSelectedVillain(villain);
    setHealth(100);
    setVillainHealth(100);
    setMessage(`Fighting ${villain}! Click Attack to battle.`);
  };

  const attack = () => {
    if (!selectedVillain) return;

    const playerDamage = Math.floor(Math.random() * 20) + 10;
    const villainDamage = Math.floor(Math.random() * 15) + 5;

    setVillainHealth(prev => Math.max(0, prev - playerDamage));
    setHealth(prev => Math.max(0, prev - villainDamage));

    if (villainHealth - playerDamage <= 0) {
      setMessage(`You defeated ${selectedVillain}! +50 points`);
      setScore(prev => prev + 50);
      setSelectedVillain('');
    } else if (health - villainDamage <= 0) {
      setMessage('You were defeated! Try again.');
      setSelectedVillain('');
    } else {
      setMessage(`You dealt ${playerDamage} damage. ${selectedVillain} dealt ${villainDamage} damage.`);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Iron Man vs Villains</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {villains.map(villain => (
              <Button
                key={villain}
                variant={selectedVillain === villain ? "default" : "outline"}
                onClick={() => selectVillain(villain)}
                size="sm"
              >
                {villain}
              </Button>
            ))}
          </div>
          {selectedVillain && (
            <>
              <div className="flex justify-between">
                <span>Iron Man: {health} HP</span>
                <span>{selectedVillain}: {villainHealth} HP</span>
              </div>
              <Button onClick={attack} className="w-full">Attack!</Button>
            </>
          )}
          <p className="text-center">{message}</p>
          <Badge variant="secondary">Score: {score}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const RunGame: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [obstacles, setObstacles] = useState<number[]>([]);
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isJumping && !gameOver) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setPosition(prev => prev + 5);
      setScore(prev => prev + 1);

      // Add obstacles
      if (Math.random() < 0.02) {
        setObstacles(prev => [...prev, position + 400]);
      }

      // Move obstacles
      setObstacles(prev => prev.map(obs => obs - 5).filter(obs => obs > -50));

      // Check collision
      const ironManBottom = isJumping ? 100 : 50;
      const collision = obstacles.some(obs => obs < position + 50 && obs + 50 > position && ironManBottom < 100);

      if (collision) {
        setGameOver(true);
      }
    }, 50);

    return () => clearInterval(gameLoop);
  }, [position, isJumping, obstacles, gameOver]);

  const resetGame = () => {
    setPosition(0);
    setObstacles([]);
    setIsJumping(false);
    setScore(0);
    setGameOver(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Iron Man Run</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 bg-gradient-to-b from-blue-200 to-blue-400 rounded overflow-hidden">
          {/* Ground */}
          <div className="absolute bottom-0 w-full h-4 bg-green-400"></div>

          {/* Iron Man */}
          <div
            className={`absolute bottom-4 w-8 h-8 bg-red-500 rounded transition-all duration-300 ${isJumping ? 'bottom-16' : ''}`}
            style={{ left: '20px' }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-1 left-1"></div>
          </div>

          {/* Obstacles */}
          {obstacles.map((obs, index) => (
            <div
              key={index}
              className="absolute bottom-4 w-8 h-8 bg-gray-600 rounded"
              style={{ left: obs - position + 20 }}
            ></div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p>Press SPACE to jump! Avoid obstacles.</p>
          <p>Score: {score}</p>
          {gameOver && (
            <div>
              <p className="text-red-500">Game Over!</p>
              <Button onClick={resetGame}>Play Again</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const GamesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Iron Man Games</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FightGame />
          <RunGame />
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
