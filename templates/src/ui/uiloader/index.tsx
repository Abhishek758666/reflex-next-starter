interface UILoaderProps {
  overlay?: boolean;
}
export default function UILoader({ overlay }: UILoaderProps) {
  return (
    <div className="uiLoader">
      <div className="loader"></div>
    </div>
  );
}
