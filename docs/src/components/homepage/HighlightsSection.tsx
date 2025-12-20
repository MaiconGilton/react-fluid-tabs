import { Accessibility, Fingerprint, Palette, Zap } from 'lucide-react';

export const HighlightsSection = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
        {[
          {
            icon: Fingerprint,
            title: '1:1 Touch Tracking',
            description:
              'Bind gestures directly to animations. Swipes feel stuck to your finger, not just triggered.',
          },
          {
            icon: Zap,
            title: 'Hardware Accelerated',
            description:
              'Animations run on the compositor thread for butter-smooth 60fps performance on low-end devices.',
          },
          {
            icon: Palette,
            title: 'Headless UI',
            description:
              'Zero styles included. You get the logic and behavior; you control the look with CSS or Tailwind.',
          },
          {
            icon: Accessibility,
            title: 'Fully Accessible',
            description:
              'Follows WAI-ARIA authoring practices for tabs. Keyboard navigable and screen-reader friendly.',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#111] border border-gray-200 dark:border-[#333] p-6 rounded-xl hover:border-primary dark:hover:border-primary transition-all group shadow-sm dark:shadow-none hover:scale-105"
          >
            <div className="mb-4 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
              <feature.icon size={24} />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {feature.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
