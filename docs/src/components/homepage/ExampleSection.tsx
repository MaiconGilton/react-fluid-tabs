import { Maximize2 } from 'lucide-react';
import { AppExample } from '../AppExample';

export const ExampleSection = ({
  onShowFullScreenExample,
}: {
  onShowFullScreenExample: () => void;
}) => {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-[#333]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Application Example
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              This example demonstrates how to use React Fluid Tabs as a
              controlled navigation component. Tabs are driven by React state,
              support swipe gestures out of the box, and render content
              declaratively—making them easy to integrate into real-world React
              applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onShowFullScreenExample()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              <Maximize2 size={18} />
              See Mobile Mode
            </button>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-[#333] rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] transition-all duration-500 mb-10">
          <AppExample />
        </div>

        <p>
          Both modes use the same Tabs components, just styled differently based
          on user device.
        </p>
      </div>
    </section>
  );
};
export default ExampleSection;
