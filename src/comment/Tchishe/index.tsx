import React, { useState } from 'react';

const App = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [message, setMessage] = useState('开始战斗！');

  const attack = () => {
    const playerDamage = Math.floor(Math.random() * 10) + 1;
    const enemyDamage = Math.floor(Math.random() * 15) + 1;

    setPlayerHealth(playerHealth - enemyDamage);
    setEnemyHealth(enemyHealth - playerDamage);

    setMessage(`你对敌人造成了 ${playerDamage} 点伤害。敌人对你造成了 ${enemyDamage} 点伤害。`);

    if (playerHealth <= 0) {
      setMessage('你被敌人击败了！');
    } else if (enemyHealth <= 0) {
      setMessage('你战胜了敌人！');
    }
  };

  return (
    <div>
      <h1>文字战斗游戏</h1>
      <div>
        <p>玩家生命值: {playerHealth}</p>
        <p>敌人生命值: {enemyHealth}</p>
        <p>{message}</p>
        <button onClick={attack} disabled={playerHealth <= 0 || enemyHealth <= 0}>
          发动攻击
        </button>
      </div>
    </div>
  );
};

export default App;