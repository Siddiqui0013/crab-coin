interface DividerProps {
  height?: string; 
}

export default function Divider({ height = "200" }: DividerProps) {
  return (
    <div
      style={{ height: `${height}px` }} 
      className="bg-[url('./assets/sand.png')] bg-cover bg-no-repeat bg-center z-20 overflow-x-hidden w-full"
    ></div>
  );
}
