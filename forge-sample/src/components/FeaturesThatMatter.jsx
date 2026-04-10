import React from "react";

const FeaturesThatMatter = () => {
  return (
    <section className="bg-white pt-10 pb-24">
      {/* -----Header----- --- */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 py-6">
        <div className="flex items-center space-x-3 font-mono text-xs">
          <span className="text-gray-400">5</span>
          <span className="text-headerGeen uppercase tracking-wider">
            Features That Matter
          </span>
          <span className="text-gray-400 hidden sm:inline">
            Irina Nita • [CORE-1528] Implement notification center actions
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* ------Main Header--------- */}
        <div className="max-w-3xl py-12 md:py-16">
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Made for teams who just ship
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Deploy, test, and scale your applications without the setup hassle.
            Build faster and with delight.
          </p>
        </div>

        {/* --------------2x2 Grid--[[[[[[[[- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-gray-100 rounded-tl-xl overflow-hidden bg-white">
          {/* ----------------Card 1--------------- */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Scriptable deployments, zero downtime
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Automate your deployments with scripts and ship updates instantly.
            </p>
            {/* SVG Image Container with Fades */}
            //////////////////////////////////////
          </div>

          {/* -----------------Card 2------------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Free SSL certificates
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Secure your sites from the get-go with free, automated SSL.
            </p>
            {/* SVG Image Container with Fades */}
            /////////////////////////////////////
          </div>

          {/* -------------------Card 3------------ */}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Databases, managed
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Provision, back up, and monitor database clusters without leaving
              Forge.
            </p>
            {/* SVG Image Container with Fades */}
            /////////////////////////////////
          </div>

          {/* ------------------Card 4-----------------*/}
          <div className="p-10 md:p-14 border-b border-r border-gray-100 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Test faster with hosted domains
            </h3>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Skip domain setup and launch your app instantly on a on-forge.com
              domain.
            </p>
            {/* SVG Image Container with Fades */}
            //////////////////////////////
          </div>
        </div>

        {/* ----------Bottom Grid----------*/}
        {/* We use border-l here to continue the outer left edge seamlessly from the grid above */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-gray-100 bg-white">
          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              Queues as they should be
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Start and manage supervised queue workers directly. No more manual
              Supervisor configuration.
            </p>
          </div>

          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              Task & job scheduling
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Schedule recurring tasks with predefined intervals or custom cron
              expressions.
            </p>
          </div>

          <div className="p-10 md:py-16 md:px-14 border-b border-r border-gray-100">
            <h4 className="text-[1.15rem] font-bold text-gray-900 mb-3">
              ⌘K anything
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Do everything without reaching for the mouse with Forge's
              feature-rich command palette.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThatMatter;
