import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$199",
      description: "Perfect for small landing pages or one-page portfolios.",
      features: [
        "Responsive Design",
        "Basic Animations",
        "1–2 Pages",
        "Deployed on GitHub Pages",
      ],
    },
    {
      title: "Pro",
      price: "$499",
      description:
        "Ideal for businesses and projects that need rich interactivity.",
      features: [
        "Multi-page React App",
        "Custom Animations",
        "API Integration",
        "Deployment Setup",
      ],
    },
    {
      title: "Premium",
      price: "$899",
      description:
        "For large-scale apps or advanced features like maps & dashboards.",
      features: [
        "Full React + Map Integration",
        "Advanced Animations",
        "Backend Integration",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-6 text-center">Pricing</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        Transparent and flexible pricing for your next web project. Choose the
        package that best fits your goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`relative bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-red-500/40 transition-transform hover:-translate-y-2 ${
              i === 1 ? "md:scale-105 border-red-500" : ""
            }`}
          >
            {/* Highlight ribbon for middle plan */}
            {i === 1 && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Popular
              </div>
            )}

            <h2 className="text-3xl font-semibold text-red-400 mb-2">
              {plan.title}
            </h2>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-red-400" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
