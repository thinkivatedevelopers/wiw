import { Course } from './models/course' ;

export const state: Course[] = [
    {
      slug: 'kerala-state',
      name: 'Kerala State Board',
      description: '',
      image: 'assets/images/sylabus-icons/wiw-coinbackks.png',
      isLive: true,
      grades: [
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: '',
          image: '',
          isLive: true,
          packages: [
            {
              slug: 'Kerala-state-plus-two-offline-bundle-pack',
              name: 'Kerala State Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Physics', icon: 'assets/icons/phy.svg' },
              ],
            },
          ],
        },
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-x',
          name: 'Class - X',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-ix',
          name: 'Class - IX ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-viii',
          name: 'Class - VIII ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-vii',
          name: 'Class - VII',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        
        {
          slug: 'class-vi',
          name: 'Class- VI ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-five',
          name: 'Class- V ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
      ],
    },
    {
      slug: 'cbse',
      name: 'CBSE Board',
      description: ' CbseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinCBSE.png',
      isLive: true,
      grades: [
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: '',
          image: '',
          isLive: true,
          packages: [
            {
              slug: 'Kerala-state-plus-two-offline-bundle-pack',
              name: 'Kerala State Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Physics', icon: 'assets/icons/phy.svg' },
              ],
            },
          ],
        },
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-x',
          name: 'Class - X',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-ix',
          name: 'Class - IX ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-viii',
          name: 'Class - VIII ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-vii',
          name: 'Class - VII',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        
        {
          slug: 'class-vi',
          name: 'Class- VI ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
        {
          slug: 'class-five',
          name: 'Class- V ',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        },
      ],
    },
    {
      slug: 'icse',
      name: 'ICSE Board',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: true,
      grades: [
        {
          slug: '',
          name: '',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        }
      ],
    },
    {
      slug: 'jee',
      name: 'JEE',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: true,
      grades: [
        {
          slug: '',
          name: '',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        }
      ],
    },
    {
      slug: 'upse',
      name: 'UPSC',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: true,
      grades: [
        {
          slug: '',
          name: '',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        }
      ],
    },
    {
      slug: 'neet',
      name: 'NEET',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: true,
      grades: [
        {
          slug: '',
          name: '',
          description: '',
          image: '',
          isLive: false,
          packages: [],
        }
      ],
    }

  ];
