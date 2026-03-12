interface DeviceFrameProps {
  type: 'phone' | 'desktop';
  imageSrc: string;
  alt: string;
}

export default function DeviceFrame({ type, imageSrc, alt }: DeviceFrameProps) {
  if (type === 'phone') {
    return (
      <div className="flex justify-center items-center">
        <div className="relative w-80 h-auto">
          {/* Phone frame */}
          <div className="rounded-3xl border-8 border-black bg-black overflow-hidden shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            {/* Screen */}
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-auto display-block"
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop frame
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-4xl">
        {/* Monitor frame */}
        <div className="bg-slate-200 rounded-lg shadow-2xl overflow-hidden">
          {/* Screen bezel */}
          <div className="bg-white p-2">
            <div className="border-4 border-slate-300 rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Monitor stand */}
          <div className="h-8 bg-slate-300 flex items-center justify-center">
            <div className="w-24 h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
