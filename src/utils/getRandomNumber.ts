export default function getRandomNumber({min, max}: {min: number, max: number}) {
  return Math.round(Math.random() * (max - min) + min);
}