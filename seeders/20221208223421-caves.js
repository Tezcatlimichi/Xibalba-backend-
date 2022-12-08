'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('caves', [
      {
        name: 'Sagrada Familia Caves ',
        location: 'Zambales, Philippines ',
        details:
          'The story goes that a little boy saw the holy family in the limestone formations, hence the name.Karst Caves like this are formed by the dissolution of limestone by water containing CO2 . Such caves will typically take thousands of years to form.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9f%2Ff7%2Fe2%2F9ff7e26414c5a90eed7c78cd60a1f6b1.jpg&f=1&nofb=1&ipt=2d5853d5f616598c6d528749a54a277bfef3f418567d602b2ae22b772139e5f6&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc4.staticflickr.com%2F5%2F4074%2F4754763395_a9357fa366_b.jpg&f=1&nofb=1&ipt=3bdc731d79ae094e279216248796b3a8fa1f8b09dfe2bc9e83dd64cdd80e2835&ipo=images',
        imageThree: 'https://imgur.com/83BtBfo.png',
        countryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gua Nasib Bagus (Good Luck Cave)',
        location: 'Sarawak, Malaysia',
        details:
          'This cave contains the world’s largest natural underground chamber, Sarawak Chamber. At more than 600m long, 400m wide and 100m tall, it is often described as being capable of holding up to ten passenger aircrafts!',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HbvH8_Q1w4fA1GNEhm0TWQHaE8%26pid%3DApi&f=1&ipt=d42b9c35a2aaafa93f1e0583b977c46e5ec3891f272c3f7f353b0a9cf988ee99&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.pinimg.com%2F1200x%2Fe6%2Ff8%2F5a%2Fe6f85af41f3e77979d5366d082e6fe90.jpg&f=1&nofb=1&ipt=a73e53243845250be250b09a7368efec6cec95e22e1c2b3bef3e208a327bcd8f&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4b%2F32%2Fe4%2F4b32e4bd37bd84f8b614fd909ced2698.jpg&f=1&nofb=1&ipt=6f36aacf86456b13ba596cc666795c212396dc01feaac715ff52dbd1ef843b4b&ipo=images',
        countryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gua Tempurung',
        location: 'Perak, Malaysia',
        details:
          'Gua Tempurung is a cave in Gopeng, Perak, Malaysia. It is popular among spelunkers, or caving enthusiasts. About 3 km long, it is one of the longest caves. in Peninsula Malaysia.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvisitperak.com.my%2Fwp-content%2Fuploads%2F2013%2F03%2Fgua-tempurung.jpg&f=1&nofb=1&ipt=39aca3a66e0e397aa4e7eb855b1694f83088ab119eda6fc8e78036e3150f8cce&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vidadeliya.com%2Fwp-content%2Fuploads%2F2018%2F09%2F13.-Gua-Tempurung-Midpoint.jpg&f=1&nofb=1&ipt=cd03df73a25dc00ede3166fa3ab4c537c56805aca3d1293235869292d82ec696&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.airpaz.com%2Fwp-content%2Fuploads%2FGua-Tempurung-Perak-Malaysia-1.png&f=1&nofb=1&ipt=06b89edc3d59b657cf977f92a394402eb7929310e0c189fcc986c78c3752a755&ipo=images',
        countryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Langun-Gobingob Caves ',
        location: 'Eastern Samar, Philippines',
        details:
          ' The majority of this cave system, which is the biggest in the Philippines, the second largest in Asia, and the third largest karst formation in the world, is renowned for its speleothems and the diversity of its cave life',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffaq.ph%2Fwp-content%2Fuploads%2F2015%2F09%2FLangun-Gobingob-Cave.jpg&f=1&nofb=1&ipt=3ae402ca8cc0b7bfc8638f77a14d7c9cfb975f507b3d99a5e459f07061db4ad3&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffaq.ph%2Fwp-content%2Fuploads%2F2015%2F09%2FLangun-Gobingob-cave-calbiga.jpg&f=1&nofb=1&ipt=f6884e53f5a37ddabf2b8db9e7445b96921766ad9488aba40550068c872b7441&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.baepacking.com%2Fwp-content%2Fuploads%2F2017%2F08%2FFI_Langun-Gobingob16-1024x626.jpg&f=1&nofb=1&ipt=58bfe73faf8557ef59238b32d86a7d948a3da12a2846f8ecf84c187231d8ce7c&ipo=images',
        countryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fingal's Cave",
        location: 'Inner Hebrides, Scotland',
        details:
          "Fingal's Cave with its natural acoustics is a natural wonder. For centuries, Fingal's Cave has inspired many forms of art. The unique hexagonal basalt columns are the main attraction and are formed within a Paleocene lava flow. ",
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fvisitcryptoville.com%2Fwp-content%2Fuploads%2F2017%2F03%2FFingal01.jpg&f=1&nofb=1&ipt=70fe527af1cf3f0ade457020924ce7484c984b912266566ff9d061d910c96887&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraveldigg.com%2Fwp-content%2Fuploads%2F2016%2F10%2FFingal%25E2%2580%2599s-Cave-Photo-From-Above.jpg&f=1&nofb=1&ipt=584fe6d9b3df2311f9b5f9a8f5b11d76cde27947b99831c7c82471341b0a0a27&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fvisitcryptoville.com%2Fwp-content%2Fuploads%2F2017%2F03%2FFingal04.jpg&f=1&nofb=1&ipt=58de7b33ef2be35cd0ce8943bc513f6fb7732101268c5241c954a6f897eec93d&ipo=images',
        countryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bone Caves',
        location: 'Ullapool, Scotland',
        details:
          'The celebrated limestone Bone Caves were excavated in 1889 by the geologists Peach and Horne. They found the remains of now extinct animals which once roamed the Highlands including lynx, polar bear, arctic fox and lemmings.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F1b%2Fe3%2Fe4%2F42%2Fone-of-the-caves.jpg&f=1&nofb=1&ipt=efba182ae68db2fea52c1e3f5aa7055113ac1c7e142484d3f7605678da6aadc3&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.traveling-savage.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fi-BHSn9bT.jpg&f=1&nofb=1&ipt=599028fcb785839a0d597a044a0803e0180d7bb83f395b109b464806a08f0a8a&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3teiib5p3f439.cloudfront.net%2Fnews%2Fwp-content%2Fuploads%2F2017%2F05%2F5.jpg&f=1&nofb=1&ipt=fd14ab6eafcf8bd0ea6de4c27f926ad4a5246aeacddd3feffefdb821a3a57803&ipo=images',
        countryId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waitomo Glowworm Caves',
        location: 'Waitomo, New Zealand',
        details:
          ' It is known for its population of Arachnocampa luminosa, a glowworm species found exclusively in New Zealand. This cave is part of the waitomo streamway system that includes the Ruakuri Cave, Lucky Strike, and Tumutumu Cave.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwindows10spotlight.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fb7b70e1ef8d3afbe7c1f00507338dfca.jpg&f=1&nofb=1&ipt=1564949c30bcb0625a0b116b04762b00f142674968c0c0eb8665ea9e5a1f8e9f&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnewmoda.expatwoman.com%2Fs3fs-public%2Fembedded2865888.jpg&f=1&nofb=1&ipt=b25c6141463ab3cb8e7a64f9e8c2a94b2a8b18592f257adeac1d0f9d55662445&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelazzi.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fimage-1151.jpg&f=1&nofb=1&ipt=e45d6b5032981624e4d0f135fb3b2a9dc4e14831e79ee1c633e0f572e3ee57f6&ipo=images',
        countryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngarua Caves',
        location: 'Motueka, New Zealand',
        details:
          'The Ngārua Caves are a series of limestone caves in the Takaka Hill range south of Abel Tasman National Park.The caves cannot be visited unattended.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.aatravel.co.nz%2Fclient_media%2F000%2F000%2F008%2F996%2Fimg%2Fraw%2F14.jpg&f=1&nofb=1&ipt=d366f75722ebb99e9ca20126477b3a62e0083a9db65487b2ebdfea526105f5ac&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0e%2F2f%2F38%2F27%2Fstunning-formations.jpg&f=1&nofb=1&ipt=2b6b6f24be26a232a6add4c6100289267056d87f2a9d11f79d92ab526a788338&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2Fcd%2Fa2%2Fc6cda27fbfab5dd41446558a59045453.jpg&f=1&nofb=1&ipt=2b5da1153cd6b78fb7e438b1383ba2d4b070af685f619ea4cbc37858f4e8c37b&ipo=images',
        countryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ak'tun Kan Caves",
        location: 'Guatemala',
        details:
          'The Ak’tun Kan Caves are also known as the cueva de la serpiente (cave of the serpent) due to a local legend that mentions a large snake living here. Some of the caves have bats hanging from the ceilings, but you’re unlikely to run across any snakes .',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoucanslandmarks.s3.amazonaws.com%2Fmedia%2Fcom_scatalog%2Fimages%2Fcovers%2Fo%2F20200412115920.jpg&f=1&nofb=1&ipt=7ace9d688922ebabdf80ad1070685130d8a7fd3d455581fe4cd91cc006a68ca5&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcheung.interzone.com%2FWorld%2FLatinAmericaWWW%2FGuatemala%2FAKTUN%2F1.jpg&f=1&nofb=1&ipt=21b49bef06166f9b6e0cb1539b33a748c35b9c090a19b6c77bd4868f26d9d11c&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0a%2Fa5%2Fba%2F81%2Fes-un-detalles-de-el.jpg&f=1&nofb=1&ipt=f5900e1c88a10a91013731a71bcaba566f478a4cbcfa2312dfc02863d3def3ac&ipo=images',
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Candelaria Caves',
        location: 'Guatemala',
        details:
          'The fantastic limestone caves of Candelaria are composed of 7 separate caves that are interconnected by the Río Candelaria. Candelaria is one of Central America’s largest cave systems.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmaya-overland.weebly.com%2Fuploads%2F7%2F5%2F5%2F4%2F7554406%2F8394153_orig.jpg&f=1&nofb=1&ipt=2aa4088b9d7c1d468932edfe886b29b4c8340db72d1f3b9e4db887eb7bfa8cde&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falchetron.com%2Fcdn%2Fcandelaria-caves-acc2db29-f992-446a-aa46-47f8086820a-resize-750.jpeg&f=1&nofb=1&ipt=01f71a33c17cb4e7962887b3c4ae6659e4b3181b1b0ad92f9697d654a8c3634a&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgomundomaya.com%2Fguatemala%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2FCandelaria2-1.jpg&f=1&nofb=1&ipt=582f32f417d2ba34756aa17e20eabaf433fcf7022e599e214a3a4f322fe3b860&ipo=images',
        countryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cueva de los cristales',
        location: 'Chihuahua, Mexico',
        details:
          'Cave of the Crystals or Giant Crystal Cave is a cave connected to the Naica Mine, Chihuahua, Mexico.The chamber contains giant selenite crystals , some of the largest natural crystals ever found.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa0%2F36%2Ff6%2Fa036f60fc745989a3777a72ead1c3794.jpg&f=1&nofb=1&ipt=6ec6405123c5e182120010f67ace3701fb78ee5f5f4b9bad1437ac9128741653&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fyshr4hc2gjd61.jpg&f=1&nofb=1&ipt=1b26991f6a34716082a01a8250e43436da48623646a29b46a098ff1ef8a2e97d&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5a%2F0c%2F93%2F5a0c9337f0ee8503958065748abdd7c1.jpg&f=1&nofb=1&ipt=330d3780738e69b7a8a1035c0fe9f47a03e73fe80063c43f601387ae430d77a2&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sótano de las Golondrinas',
        location: 'San Luis Potosi, Mexico',
        details:
          'The Cave of Swallows is 512 meters deep, with a free fall drop of 370 meters from its highest point.It is the largest known cave shaft in the world, the second deepest pit in Mexico, and among the deepest sheer drops in the world.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmxcity.mx%2Fwp-content%2Fuploads%2F2020%2F08%2Fsotano-de-las-golondrinas3.jpeg&f=1&nofb=1&ipt=60013ff0ece8110b3344479943477b3097025269d55e27c2efabf251a26203a7&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmxcity.mx%2Fwp-content%2Fuploads%2F2020%2F08%2Fsotano-de-las-golondrinas.jpg&f=1&nofb=1&ipt=a97d903e11231269b325349c45973f490f3bc87998fa69bbb3732d109cea7cb9&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.puntofape.com%2Fwp-content%2Fuploads%2F2012%2F11%2Fpeshera-0017.jpg&f=1&nofb=1&ipt=9c476b61b65b4888544455ce5d641d2125c1f78a86065834339ae70c2b26c0b7&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carlsbad Cavern',
        location: 'New Mexico, USA',
        details:
          'Carlsbad Cavern includes a large limestone chamber, named simply the Big Room, which is almost 4,000 ft long, 625 ft  wide, and 255 ft  high at its highest point. The Big Room is the largest chamber in North America and the 31st largest in the world.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.williamhortonphotography.com%2Fwp-content%2Fuploads%2F2018%2F08%2FCarlsbad-008.jpg&f=1&nofb=1&ipt=692554505c97965dec86239ffa887fd187ec02a4145e88f38d2aa0736b615565&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.williamhortonphotography.com%2Fwp-content%2Fuploads%2F2018%2F08%2FCarlsbad-041.jpg&f=1&nofb=1&ipt=b2e9051e132fce34651f4c8edcda2a8aa9b42b6214882235109c440873c568c3&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.williamhortonphotography.com%2Fwp-content%2Fuploads%2F2018%2F08%2FCarlsbad-001.jpg&f=1&nofb=1&ipt=91c73c172db67e116270129a0123296c302f2651902a12bbf04cac8fe585b208&ipo=images',
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lava River Cave',
        location: 'Oregon, USA',
        details:
          'At 5,211 feet in length, the northwest section of the cave is the longest continuous lava tube in Oregon',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc1%2Fed%2F3b%2Fc1ed3b3d8e18862fea9dd16dbaf18365.jpg&f=1&nofb=1&ipt=48f0b76d61339fd78a55d13f564a0dc7a0e5b05a53f57650835548cfc5b49f70&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.charismaticplanet.com%2Fwp-content%2Fuploads%2F2018%2F06%2FCoconino-Lava-River-Cave-Arizona-7.jpg&f=1&nofb=1&ipt=ecd33d1d21a1534bed3de08c24c912f06360afda1197a0162f68ca402f138b09&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fworldofcaves.com%2Fwp-content%2Fuploads%2F2019%2F10%2FLava_river_cave_passage_2-2048x1373.jpg&f=1&nofb=1&ipt=7cf799477500dff1b1932c4d8d58f66f0036af3296667b6a120127c084448ad2&ipo=images',
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('caves')
  }
}
