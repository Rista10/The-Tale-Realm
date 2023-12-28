import { useEffect,useState } from 'react';
import './style.css'; // Import your CSS file
import { FaStar } from 'react-icons/fa'


const Starfield = () => {
    const [stars, setStars] = useState([]);
    let count = 0;
  const originPosition = { x: 0, y: 0 };
  let last = {
    starTimestamp: new Date().getTime(),
    starPosition: originPosition,
    mousePosition: originPosition,
  };

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: [
        'rgb(115, 45, 217)',
        'rgb(163, 15, 200)',
        'rgb(196, 0, 181)',
        'rgb(221, 0, 160)',
        'rgb(238, 0, 140)',
        'rgb(250, 0, 121)',
        'rgb(255, 39, 104)',
        'rgb(255, 69, 88)',
        'rgb(255, 93, 74)',
        'rgb(255, 115, 63)'
      ],
    sizes: ["1.4rem", "1rem", "0.6rem"],
    animations: ["fall-1", "fall-2", "fall-3"]
  }

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
  px = value => withUnit(value, "px"),
  ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
const diffX = b.x - a.x,
    diffY = b.y - a.y;

return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

const calcElapsedTime = (start, end) => end - start;

const appendElement = element => document.body.appendChild(element),
  removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);


  const createStar = position => {
    const color = selectRandom(config.colors);
    
    const newStar = {
      id: count++,
      position,
      size: selectRandom(config.sizes),
      color: color,
      shadow: `0px 0px 1.5rem rgb(${color} / 0.5)`,
      animation: config.animations[count++ % 3],
    };
    
    setStars(prevStars => [...prevStars, newStar]);
  
    setTimeout(() => {
      setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
    }, config.starAnimationDuration);
  }
  
  const createGlowPoint = position => {
    const glow = document.createElement("div");
    
    glow.className = "glow-point";
    
    glow.style.left = px(position.x);
    glow.style.top = px(position.y);
    
    appendElement(glow)
    
    removeElement(glow, config.glowDuration);
  }
  
  const determinePointQuantity = distance => Math.max(
    Math.floor(distance / config.maximumGlowPointSpacing),
    1
  );

  const createGlow = (last, current) => {
    const distance = calcDistance(last, current),
          quantity = determinePointQuantity(distance);
    
    const dx = (current.x - last.x) / quantity,
          dy = (current.y - last.y) / quantity;
    
    Array.from(Array(quantity)).forEach((_, index) => { 
      const x = last.x + dx * index, 
            y = last.y + dy * index;
      
      createGlowPoint({ x, y });
    });
  }
  
  const updateLastStar = position => {
    last.starTimestamp = new Date().getTime();
  
    last.starPosition = position;
  }
  
  const updateLastMousePosition = position => last.mousePosition = position;
  
  const adjustLastMousePosition = position => {
    if(last.mousePosition.x === 0 && last.mousePosition.y === 0) {
      last.mousePosition = position;
    }
  };

  const handleOnMove = e => {
    const mousePosition = { x: e.clientX, y: e.clientY }
    
    adjustLastMousePosition(mousePosition);
    
    const now = new Date().getTime(),
          hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
          hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
    
    if(hasMovedFarEnough || hasBeenLongEnough) {
      createStar(mousePosition);
      
      updateLastStar(mousePosition);
    }
    
    createGlow(last.mousePosition, mousePosition);
    
    updateLastMousePosition(mousePosition);
  }
  
  useEffect(() => {
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return <>
   {stars.map(star => (
      <FaStar
        key={star.id}
        style={{
          position: 'absolute',
          left: px(star.position.x),
          top: px(star.position.y),
          fontSize: star.size,
          color: star.color,
          textShadow: star.shadow,
          animationName: star.animation,
          animationDuration: ms(config.starAnimationDuration),
        }}
      />
    ))}
  </> // Create a container element for the starfield
};

export default Starfield;
