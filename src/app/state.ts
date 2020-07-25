import { Course } from './models/course' ;

export const state: Course[] = [
    {
      slug: 'kerala-state',
      name: 'Kerala State Board',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'kerala-state.png',
      grades: [
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: 'Plus one Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'kerala-state-plus-one-offline-bundle-pack',
              name: 'Keral State Plus One Offline Bundle Pack',
              description: 'Keral State Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Chemistry', icon: '/assets/icons/che.png' },
              ],
            },
            {
              slug: 'kerala-state-plus-one-online-pack',
              name: 'Keral State Plus One OnlinePack',
              description: 'Keral State Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Physics', icon: '/assets/icons/phy.png' },
                { name: 'Chemistry', icon : '/assets/icons/che.png' },
                { name: 'Biology', icon: '/assets/icons/bio.png' },
              ],
            },
          ],
        },
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: 'Plus two Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'kerala-state-plus-two-offline-bundle-pack',
              name: 'Keral State Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Physics', icon: '/assets/icons/phy.png' },
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
      image: 'cbse-logo.png',
      grades: [
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: 'Plus one Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'cbse-plus-one-offline-bundle-pack',
              name: 'CBSE Plus One Offline Bundle Pack',
              description: 'CBSE Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Chemistry', icon: '/assets/icons/che.png' },
              ],
            },
            {
              slug: 'cbse-plus-one-online-pack',
              name: 'Cbse Plus One OnlinePack',
              description: 'Cbse Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Chemistry', icon: '/assets/icons/che.png' },
                { name: 'Mathematics', icon: '/assets/icons/math.png' },
              ],
            },
          ],
        },
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: 'Plus two Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'cbse-plus-two-offline-bundle-pack',
              name: 'Cbse Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Mathematics', icon: '/assets/icons/math.png' },
              ],
            },
          ],
        }
      ],
    },
    {
      slug: 'icse',
      name: 'ICSE Board',
      description: ' Icse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: 'cisce-logo.png',
      grades: [
        {
          slug: 'plus-one',
          name: 'Plus One',
          description: 'Plus one Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'icse-plus-one-offline-bundle-pack',
              name: 'ICSE Plus One Offline Bundle Pack',
              description: 'CBSE Plus Two Offline Bundle Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: false,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Mathematics', icon: '/assets/icons/math.png' },
              ],
            },
            {
              slug: 'icse-plus-one-online-pack',
              name: 'ICSE Plus One OnlinePack',
              description: 'Icse Plus Two Online Pack Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 250,
              price: 9000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Chemistry', icon: '/assets/icons/che.png' },
                { name: 'Mathematics', icon: '/assets/icons/math.png' },
              ],
            },
          ],
        },
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: 'Plus two Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'icse-plus-two-offline-bundle-pack',
              name: 'ICSE Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: '/assets/icons/bio.png' },
                { name: 'Mathematics', icon: '/assets/icons/math.png' },
              ],
            },
          ],
        }
      ],
    }

  ];
