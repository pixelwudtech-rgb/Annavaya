import CircularText from './ReactProject/CircularText';

export default function App() {
  return (
    <CircularText
  text="*KEERAI*WORLD"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
  );
}
