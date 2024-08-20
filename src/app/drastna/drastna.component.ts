import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Card {
  id: number;
  link: string;
  img: string;
  description: string;
  title: string;
}

@Component({
  selector: 'app-drastna',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './drastna.component.html',
  styleUrls: ['./drastna.component.css'],
})
export class DrastnaComponent {
  business: Card[] = [
    {
      id: 1,
      img: 'assets/FICO.jpg', // Adjust image path
      description: 'لإدارة المحاسبة المالية وإعداد التقارير المالية و التحكم في التكاليف وإدارة الأرباح والخسائر',
      title: 'Financial Accounting and Controlling (FICO)',
      link: '/fico',
    },
    {
      id: 2,
      img: 'assets/SD.jpg', // Adjust image path
      description: 'لإدارة عمليات المبيعات والتوزيع',
      title: 'Sales and Distribution (SD)',
      link: '/sd',
    },
    {
      id: 3,
      img: 'assets/MM.jpg', // Adjust image path
      description: 'لإدارة عمليات الشراء والمخزون والتوريد',
      title: 'Materials Management (MM)',
      link: '/mm',
    },
    {
      id: 4,
      img: 'assets/PP.jpg', // Adjust image path
      description: 'لتخطيط وإدارة الإنتاج و لضمان جودة المنتجات والعمليات',
      title: 'Production Planning and Quality Management (PP/QM)',
      link: '/pp',
    },
    {
      id: 5,
      img: 'assets/PM.jpg', // Adjust image path
      description: 'لإدارة صيانة المعدات والمرافق',
      title: 'Plant Maintenance (PM)',
      link: '/pm',
    },
    {
      id: 6,
      img: 'assets/HCM.jpg', // Adjust image path
      description: 'لإدارة الموارد البشرية وعمليات التوظيف والتطوير الوظيفي',
      title: 'Human Capital Management (HCM/HR)',
      link: '/hcm',
    },
  ];

  technical: Card[] = [
    {
      id: 1,
      img: 'assets/ABAP.jpg', // Adjust image path
      description: 'هي لغة برمجة تستخدم بشكل أساسي في تطوير تطبيقات الساب',
      title: 'ABAP (Advanced Business Application Programming)',
      link: '/abap',
    },
    {
      id: 2,
      img: 'assets/BASIS.jpg', // Adjust image path
      description: 'تشير إلى الأساسيات التقنية لنظام ساب',
      title: 'BASIS',
      link: '/basis',
    },
  ];

  constructor(private router: Router) {}
}
