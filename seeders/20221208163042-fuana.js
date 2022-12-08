'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('fuanas', [
      {
        scientificName: 'Macroderma gigas',
        commonName: 'Ghost Bat',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.newsapi.com.au%2Fimage%2Fv1%2F1c795a4f1f3365268f4deb132124aa90%3Fwidth%3D1024&f=1&nofb=1&ipt=d1304098e3ba06aadbef64dcf455111202087a7a49d20b8fcad9c13ed80142c4&ipo=images',
        whoTheyAre:
          'The species is the only Australian bat that preys on large vertebrates (birds, reptiles and other mammals) which they detect using acute sight and hearing, combined with echolocation, while waiting in ambush at a perch.Their fur is light or dark grey.',
        whereToFind:
          'Today they are not so widespread and are confined to three separate regions that are all north of the Tropic of Capricorn, all either near the coast or within about 400 kilometres of it.',
        protect:
          'The ghost bat is listed as endangered under state legislation in South Australia and Queensland, vulnerable under Western Australian legislation and the Commonwealth Environment Protection and Biodiversity Conservation Act 1999.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scientificName: 'Oxychilus cellarius',
        commonName: 'Cellar Glass-snail',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F5128%2F13999412213_6665163a6f_b.jpg&f=1&nofb=1&ipt=69a8e7ab1e5cea42e955d675c30d0abad934e37aa6acc53ee50f27e076d8eb8e&ipo=images',
        whoTheyAre:
          'The Cellar Glass-snail belongs to the air-breathing land snails and slugs. It was first described in the year 1774 by the Danish naturalist Otto Friedrich Müller. The animals are living all year round in natural caves, mining tunnels and rock cellars.',
        whereToFind:
          'The natural distribution of the Cellar Glass-snail encompasses Western-, Middle- and Northern Europa. The eastern border runs through Poland and Slovakia. In Scandinavia, the snail is restricted to coastal areas.  ',
        protect:
          'As of now the species is not threatened but has chosen the Cave Animal of the Year to point out the immense deficiencies in the research of subterranean ecosystems and their associated faunas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scientificName: 'Proasellus cavaticus',
        commonName: 'Cave Asellid',
        image:
          'https://hoehlentier.de/wp-content/uploads/2017/09/2014-01-900x600.jpg',
        whoTheyAre:
          'The Cave Asellid belongs to the class of crustacees. They live in cave waters, wells and in ground water all year long. They are also found in springs, but only rarely. Like many "true" cave animals, Proasellus cavaticus is blind and unpigmented. ',
        whereToFind:
          'Records of the Cave Asellid are known from Germany, Austria, Belgium, Great Britain, Czech Republic, France, Switzerland and the Netherlands. The species occurs widespread, although the number of records are rather low.',
        protect:
          'As of now the species is not threatened but has chosen the Cave Animal of the Year to point out the immense deficiencies in the research of subterranean ecosystems and their associated faunas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scientificName: 'Microcreagris grandis',
        commonName: 'Great Basin Cave Pseudoscorpion ',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sierranevadaally.org%2Fwp-content%2Fuploads%2F2021%2F03%2FGreat-Basin-cave-pseudoscorpion.jpg&f=1&nofb=1&ipt=ccb18e269cea493a81548c8fc660836f7cad264561411708abd253569d8f22e2&ipo=images',
        whoTheyAre:
          'Pseudoscorpions are small arachnids and are distant relatives of spiders, scorpions, harvestmen, and mites. They resemble scorpions but lack the stinging tail. Consequently, pseudoscorpions are sometimes referred to as false scorpions or book scorpions.',
        whereToFind:
          'Pseudoscorpions are the top invertebrate predator in Lehman Cave, located in Great Basin National Park in Nevada',
        protect:
          'With many pseudoscorpions found in just one area, it is important to try to disturb them as little as possible. Contaminating a cave could have many consequences on the rest of the life in a cave, they are huge in the cave ecosystem.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        scientificName: 'Scoliopteryx libatrix',
        commonName: 'Herald Moth',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F3098%2F2858761055_15d69748e9_b.jpg&f=1&nofb=1&ipt=ab6a64225b7fcab9fe5a4e47f916ed590c62d4fc0be0b4d91e96133ed7340711&ipo=images',
        whoTheyAre:
          'The Herald Moth belongs to the family of the Owlet Moths. Their wing span may reach up to 45 millimetres. The common name is derived from the form and pattern of its forewings , resembling a medieval coat of arms.',
        whereToFind:
          'The Herald Moth occurs in all of Europa, Asia, Northern Africa and Northern America, where it spends the cold season in natural caves and other subterranean cavities.',
        protect:
          'This moth represents a large number of species, which are depending on caves as sheltered and frost-free refuges.As of now the species is not threatened but has chosen the Cave Animal of the Year to point out the immense deficiencies in the research of subterranean ecosystems and their associated faunas.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('fuanas')
  }
}
