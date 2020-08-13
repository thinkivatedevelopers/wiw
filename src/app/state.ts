import { Course } from './models/course' ;

export const state: Course[] = [
    {
      slug: 'Kerala-state',
      name: 'Kerala State Board',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinbackks.png',
      isLive: true,
      grades: [
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: 'Plus one Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {

              slug: 'kerala-state-plus-one-offline-bundle-pack',
              name: 'Kerala State Plus One Offline Bundle Pack',
              description: 'Keral State Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Chemistry', icon: 'assets/icons/che.svg' },
              ],
            },
            {

              slug: 'kerala-state-plus-one-online-pack',
              name: 'Kerala State Plus One OnlinePack',
              description: 'Keral State Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Physics', icon: 'assets/icons/phy.svg' },
                { name: 'Chemistry', icon : 'assets/icons/che.svg' },
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Mathematics', icon: 'assets/icons/math.svg' },
              ],
            },
            {

              slug: 'kerala-state-plus-one-offline-bundle-pack',
              name: 'Kerala State Plus One Offline Bundle Pack',
              description: 'Keral State Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Chemistry', icon: 'assets/icons/che.svg' },
              ],
            },
            {

              slug: 'kerala-state-plus-one-online-pack',
              name: 'Kerala State Plus One OnlinePack',
              description: 'Keral State Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Physics', icon: 'assets/icons/phy.svg' },
                { name: 'Chemistry', icon : 'assets/icons/che.svg' },
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Mathematics', icon: 'assets/icons/math.svg' },
              ],
            },
            {

              slug: 'kerala-state-plus-one-offline-bundle-pack',
              name: 'Kerala State Plus One Offline Bundle Pack',
              description: 'Keral State Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Chemistry', icon: 'assets/icons/che.svg' },
              ],
            },
            {

              slug: 'kerala-state-plus-one-online-pack',
              name: 'Kerala State Plus One OnlinePack',
              description: 'Keral State Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',

              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Physics', icon: 'assets/icons/phy.svg' },
                { name: 'Chemistry', icon : 'assets/icons/che.svg' },
                { name: 'Biology', icon: 'assets/icons/bio.svg' },
                { name: 'Mathematics', icon: 'assets/icons/math.svg' },
              ],
            }
          ],
        },
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: 'Plus two Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
          image: 'plus-two.jpeg',
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
        }
      ],
    },
    {
      slug: 'cbse',
      name: 'CBSE Board',
      description: ' CbseLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinCBSE.png',
      isLive: false,
      grades: [],
    },
    {
      slug: 'icse',
      name: 'ICSE Board',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: false,
      grades: [],
    },
    {
      slug: 'jee',
      name: 'JEE',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: false,
      grades: [],
    },
    {
      slug: 'upse',
      name: 'UPSC',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: false,
      grades: [],
    },
    {
      slug: 'neet',
      name: 'NEET',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'assets/images/sylabus-icons/wiw-coinICSE.png',
      isLive: false,
      grades: [],
    }

  ];
