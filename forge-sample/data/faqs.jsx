export const faqs = [
  {
    question: "What is Laravel Forge?",
    answer: (
      <div>
        {" "}
        Forge is the{" "}
        <span className="text-dark">
          {" "}
          next-generation server management platform{" "}
        </span>{" "}
        built for developers who want speed, control, and ease of use. Designed
        by the Laravel team, it supports any modern web app stack. From
        out-of-the-box zero-downtime deploys to instant server provisioning with
        Laravel VPS and automated security, Forge gives you control without the
        DevOps complexity.{" "}
      </div>
    ),
  },
  {
    question: "Do I need to use Laravel to use Forge?",
    answer:
      "No. While Forge is built by the Laravel team and works beautifully with Laravel apps, it also supports vanilla PHP, WordPress, Statamic, and other stacks, including Node.js, Nuxt, and Next.js, with broader language support coming in the future. ",
  },
  {
    question: "What is Laravel VPS?",
    answer: (
      <div>
        <span className="text-dark">Laravel VPS </span> is Forge's{" "}
        <span className="text-dark">one-click server provisioning option </span>
        . It gives you a fully configured, production-ready VPS in seconds (not
        minutes), complete with Nginx, PHP, MySQL/Postgres, Redis, and all the
        essentials you need to deploy modern applications. Unlike connecting
        your own cloud provider, Laravel VPS offers instant setup and is one of
        the most affordable VPS options. It also includes a standout feature: an
        integrated shared terminal with SSH collaboration, so multiple
        developers can troubleshoot or debug in real time.
      </div>
    ),
  },
  {
    question: "Does Forge support zero-downtime deployments?",
    answer:
      "Yes. Forge makes it easy to deploy updates without interrupting live applications, keeping your app available 100% of the time. Stacked and queued deployments help you visualize which commits were deployed and in what order, reducing confusion and deployment drift.",
  },
  {
    question: "What about Laravel Envoyer?",
    answer:
      "All new Laravel Forge subscriptions include zero-downtime deployments for a single server. Envoyer will be maintained for the foreseeable future but an additional subscription is not necessary with Forge.",
  },
  {
    question: "Should I cancel my Laravel Envoyer subscription?",
    answer: (
      <div>
        Existing Envoyer subscriptions are valid and will continue to work with
        Forge. Only new Laravel Forge subscriptions will include zero-downtime
        deployments. Additionally, Forge only supports deployments with zero
        downtime on one server, unlike Envoyer which can deploy one project to
        multiple servers. <br /> <br />
        Forge has a migration tool for Envoyer, but it is still limited to a
        single server. If you use Envoyer to deploy to multiple servers, you'll
        want to keep your subscription for the time being. <br /> <br />
        To migrate a site connected to Envoyer, open the site in your Forge
        dashboard and click the "Migrate to Forge" button. Forge will then run
        checks to see if the site is deployed to multiple servers and display a
        message tailored to your setup.
      </div>
    ),
  },
  {
    question: "is Forge usage-based pricing?",
    answer:
      "No. Forge uses flat-rate monthly pricing. You only pay for your Forge subscription and whatever your cloud provider charges.",
  },
  {
    question: "Do I need my own server or hosting provider?",
    answer:
      "Yes. You can use Laravel VPS for instant provisioning directly through Forge or connect to cloud providers like DigitalOcean, AWS, Hetzner, and others. Hosted on-forge.com domains let you instantly share your applications without needing to set up DNS first.",
  },
  {
    question: "Can I manage multiple servers or team members?",
    answer:
      "Yes. Forge includes full support for organizations, teams, role-based access, and billing separation, making it ideal for agencies, dev shops, and SaaS teams. Using Teams, you can have other team members manage servers on your behalf.",
  },
  {
    question: "Can I use Forge with GitHub or GitLab?",
    answer:
      "Yes. Forge integrates with GitHub, GitLab, and Bitbucket to deploy your code directly from your repositories. ",
  },
  {
    question: "Can I deploy non-PHP applications?",
    answer:
      "Yes, manually today, and natively in the future. Forge already supports Node.js, Nuxt, and Next.js apps. ",
  },
  {
    question: "What's the difference between Forge and Laravel Cloud?",
    answer: (
      <div>
        <ul className="list-disc pl-5">
          <li>
            Choose Laravel Forge if you want full control over your servers,
            need to customize your environment, or are deploying a mix of
            Laravel and non-Laravel applications.
          </li>
          <li>
            Choose Laravel Cloud if you want a fully managed, serverless
            experience optimized for Laravel, with no infrastructure setup or
            maintenance required.
          </li>
        </ul>
      </div>
    ),
  },
];
