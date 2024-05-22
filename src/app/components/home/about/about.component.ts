import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  backend: string[] = [
    '.NET',
    'C#',
    'Azure Functions',
    'Node.js',
    'Express.js',
    'Nest.js',
    'Java',
    'Spring Boot',
    'Spring Cloud',
    'JavaScript',
    'TypeScript',
    'Python',
    'C',
    'C++',
    'Go',
    'Blockchain',
    'Solidity',
    'Ethereum',
    'web3.js',
    'Smart Contracts',
    'Openzeppelin',
    'Hyperledger Fabric',
    'SQL',
    'SQL Server',
    'MySQL',
    'PostgresSQL',
    'NoSQL',
    'MongoDB',
    'Entity Framework',
    'JPA',
    'Hibernate',
    'Git',
  ];
  frontend: string[] = [
    'Angular',
    'RxJS',
    'PrimeNG',
    'Angular Material',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'SCSS',
    'Bootstrap',
    'Tailwind',
  ];
  infrastructure: string[] = [
    'Azure',
    'AWS',
    'GCP',
    'CI/CD',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Redis',
    'RabbitMQ',
    'Kafka',
    'Azure Service Bus',
    'Grafana',
  ];
  testing: string[] = ['Chai', 'Mocha', 'xUnit', 'JUnit', 'Mockito'];

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}
