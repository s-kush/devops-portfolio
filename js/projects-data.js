const projects = [
  
  {
    title: "Infrastructure Provisioning & Automation",
    tab: "Infrastructure",

    description:
        "Built infrastructure automation to transform bare-metal and VPS servers into production-ready hosting environments with minimal manual intervention. Standardized provisioning, configuration management, deployments, backups, and operational workflows using Infrastructure-as-Code and automation-first practices.",

    role: "DevOps Engineer (Lead)",

    environment: "Bare Metal + Linux",

    workload: "Infrastructure Automation",

    highlights: [
        {
            value: "50+",
            label: "Production Servers"
        },
        {
            value: "Multi Tenant",
            label: "Platform Ready"
        },
        {
            value: "Automated",
            label: "Backup & Recovery"
        }
    ],

    tags: [
        "Linux",
        "Bash",
        "Ansible",
        "Terraform",
        "Docker",
        "SSH",
        "Duplicacy"
    ]
  },

  {
    title: "Multi-Tenant Hosting Platform",
    tab: "Multi-Tenant",

    description: "Built and operated a self-service multi-tenant hosting platform that enabled users to independently deploy and manage containerized applications. Automated networking, SSL provisioning, tenant isolation, and application lifecycle management reduced operational overhead while maintaining production reliability.",

    role: "DevOps Engineer (Lead)",

    environment: "Bare Metal + Docker",

    workload: "Multi-Tenant Hosting",

    highlights: [
        {
            value: "<30s",
            label: "Application Provisioning"
        },
        {
            value: "5000+",
            label: "User Environments"
        },
        {
            value: "Tenant",
            label: "Isolation"
        }
    ],

    tags: [
        "Docker",
        "Linux",
        "Bash",
        "Nginx",
        "PHP",
        "JavaScript",
        "SSH"
    ],
  },

  {
    tab: "Observability",

    title: "Observability & Monitoring Platform",

    description:
    "Built and operated a centralized observability platform providing real-time visibility into Linux infrastructure and containerized workloads. Consolidated metrics, logs, service health, and alerting into a unified monitoring stack, enabling proactive issue detection, faster troubleshooting, and improved production reliability.",

    role: "DevOps Engineer (Lead)",

    environment: "Bare Metal + Docker",

    workload: "Production Observability",

    highlights: [
      {
        value: "24×7",
        label: "Monitoring"
      },
      {
        value: "Centralized",
        label: "Metrics & Logs"
      },
      {
        value: "Proactive",
        label: "Alerting"
      }
    ],

    tags: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Promtail",
      "Uptime Kuma",
      "Scrutiny",
      "Docker",
      "Linux",
      "Bash"
    ]
  },

  {
    tab: "Security",

    title: "Security Hardening & Infrastructure Defense",

    description:
    "Designed and implemented layered security controls across Linux infrastructure and containerized workloads to strengthen access management, threat detection, and infrastructure resilience. Integrated secure networking, intrusion prevention, attack simulation, and centralized authentication to reduce the platform attack surface while maintaining operational efficiency.",

    role: "DevOps Engineer (Lead)",

    environment: "Bare Metal + Docker",

    workload: "Infrastructure Security",

    highlights: [
      {
        value: "Layered",
        label: "Defense Strategy"
      },
      {
        value: "Private",
        label: "Network Access"
      },
      {
        value: "Proactive",
        label: "Threat Detection"
      }
    ],

    tags: [
      "CrowdSec",
      "Infection Monkey",
      "Tailscale",
      "Headscale",
      "WireGuard",
      "Authelia",
      "Cloudflare",
      "SSH",
      "Linux"
    ]
  },

  {
    tab: "Recovery",

    title: "Disaster Recovery & Business Continuity",

    description:
    "Designed and automated disaster recovery workflows for multi-tenant Linux hosting environments. Implemented incremental backups, application-aware database dumps, configuration archival, policy-based retention, and automated restore procedures to rapidly rebuild failed servers and recover production applications with minimal manual intervention.",

    role: "DevOps Engineer (Lead)",

    environment: "Bare Metal + Docker",

    workload: "Business Continuity",

    highlights: [
      {
        value: "Incremental",
        label: "Backups"
      },
      {
        value: "Policy-Based",
        label: "Retention"
      },
      {
        value: "Automated",
        label: "Recovery"
      }
    ],

    tags: [
      "Duplicacy",
      "Linux",
      "Docker",
      "MariaDB",
      "PostgreSQL",
      "Bash",
      "Backup",
      "Disaster Recovery",
      "Automation"
    ]
  },

  {
    tab: "Cloud Native",

    title: "Cloud-Native Application Platform",

    description:
    "Designed and built a production-style cloud-native platform to demonstrate modern Platform Engineering practices. Leverages Kubernetes (K3s), Terraform, Ansible, Argo CD, Helm, and GitOps to automate infrastructure provisioning, application delivery, observability, ingress, persistent storage, secrets management, and migration of containerized workloads from Docker Compose to Kubernetes.",

    role: "Platform Engineer",

    environment: "Kubernetes (K3s)",

    workload: "Cloud-Native Platform",

    highlights: [
      {
        value: "GitOps",
        label: "Driven Deployments"
      },
      {
        value: "Infrastructure",
        label: "as Code"
      },
      {
        value: "Cloud-Native",
        label: "Architecture"
      }
    ],

    tags: [
      "Kubernetes",
      "K3s",
      "Terraform",
      "Ansible",
      "Argo CD",
      "Helm",
      "GitOps",
      "Docker"
    ]
  },
];
