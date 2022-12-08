'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('underwaters', [
      {
        name: 'Painted Cave',
        location: 'California, USA',
        details:
          'This enormous sea cave—the longest in North America and one of the lengthiest in the world—plunges a quarter-mile into the side of Santa Cruz Island, within Channel Islands National Park.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.terragalleria.com%2Fimages%2Fnp-pacific%2Fchis61734.jpeg&f=1&nofb=1&ipt=57ed5e82c9e92d46551bedbf3a5049820f3ec8549749f8b4eac7c3517b02921c&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcaliforniathroughmylens.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fpainted-cave-santa-cruz-island-7.jpg&f=1&nofb=1&ipt=b020fa23004c47d7d7e71183951284b985d739aec3e2b3b83ff802e67c68d353&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iiCLsqKOOT1NxYzg3_E73AHaK-%26pid%3DApi&f=1&ipt=2acaba4a463b7785b3e4d4a98fd55b66049af6bedd4c92135e8791ea04587b11&ipo=images',
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Devil's Spring System",
        location: 'Florisa, USA',
        details:
          'The Devil’s Spring System is the official name for a group of three springs: Devil’s Eye, Devil’s Ear, and Little Devil. These springs combine to produce approximately 80 million gallons of fresh aquifer water daily.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffirstmagfloridahome.files.wordpress.com%2F2020%2F10%2Fdji_9927_edited.jpg%3Fw%3D2048&f=1&nofb=1&ipt=f44839623c157124765f0f139a76550ca24b168954eec3805f42c83a67f8cbc3&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.divebuddy.com%2Fmembers%2F1%2Fpic_25417_95130.jpg&f=1&nofb=1&ipt=8b562164cafb1ef5600af0f96e32090bb05de87fd9158c246cc46467fb7ae389&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.assets.thediscoverer.com%2F2019%2F10%2FGinnie-Springs-Florida.jpg&f=1&nofb=1&ipt=3cf812f42ef8cc791db942a174a951830c05903b6f55a8b9318676daa901a35c&ipo=images',
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jacob's Well",
        location: 'Texas, USA',
        details:
          'Jacob’s Well is the largest underwater cave in the region, with an average depth of 120 feet.  It contains a series of silted chambers separated only by narrow restrictions and the longest passageway is whopping 4,500 feet long.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.locable.com%2Fuploads%2Fresource%2Ffile%2F94099%2Fgallery_Jacobs-Well-Water-Level.jpg&f=1&nofb=1&ipt=d339ddcfe1fae44342810e5a623bf7c5502793b8ad79aa65d69eb925c1438027&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.beyonddivingscuba.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fcenotes-warning-sign.jpg&f=1&nofb=1&ipt=a3e78b638b1102b251cb1575acb7e53f2d8cfe12bd7444aac880678b39993865&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.smtxphotos.com%2Fwp-content%2Fuploads%2F2015%2F09%2FJacobs-Well-at-Night-Wimberley-TX.jpg&f=1&nofb=1&ipt=9b0d5b59f9a5f1ecec8d27db2e2d0886ebf14129f9b704e0b22580389337c4d3&ipo=images',
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cenote Chac Mool',
        location: 'Quintana Roo, Mexico',
        details:
          'There are two entries in Chac Mool , both leading to a relatively wide cavern with a lot of natural light entering from the opening.The roof has collapsed where divers can surface to enjoy an enormous number of beautiful stalactites and some fossils.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2F5b%2Fa2%2Fe15ba291f31b49a637952027eed11e88.jpg&f=1&nofb=1&ipt=1e93c215f1b789baa867d3d5d6230bce95c8ea7b8ebcc07171c1a1569415c062&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvisitroo.com%2Fimg%2Fmx%2Fe%2F1420562756-14-Cenote_Chac_Mool.jpg&f=1&nofb=1&ipt=5ced82a150f093f5ed5f2e308b077b6e65952a24965aea64d58198239da73daf&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.diversunderground.com%2Fwp-content%2Fuploads%2F2021%2F07%2FCenote-Chac-Mool-Wildlife.jpg&f=1&nofb=1&ipt=da2be31eec99263cf9a0bcce53d8785e04ddc572813fb861090d1b4a6bfa4758&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cenote Dos Ojos',
        location: 'Tulum, Mexico',
        details:
          'Dos Ojos is one of the longest structures in the Yucatán Peninsula, with about 60 kilometers of exploration range and links to over 25 cenotes.For non-divers, too, it is a perfect cenote, as you can snorkel through the silvery caves',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdopaoaocaviar.com.br%2Fwp-content%2Fuploads%2F2014%2F09%2Fdos-ojos-6.jpg&f=1&nofb=1&ipt=63d81ef4f39e125330b70ffc22d761e976b50a6bb7bd670010905dec2692fb2c&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2020%2F04%2FGettyImages-872214828.jpg&f=1&nofb=1&ipt=2f538cee8080e9561eb847b4f4c665b1270d0021e8ed113db3dd4b4ba64b3aaf&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trytn.site%2Fstpcaribe%2F2017%2F10%2FDos-Ojos-Cenote-Tour.jpg&f=1&nofb=1&ipt=5628dc538b1ae2ec45531b573e630e4b41a15b68ce0bdad4cab1c77719c5a93e&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cenote Taj Mahal',
        location: 'Tulum, Mexico',
        details:
          'This specific cenote is famous for its incomparable light effects which are always changing depending on the season. The reason for these changes is the continuously changing position of the sun.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floquesigue.tv%2Fwp-content%2Fuploads%2F2021%2F02%2F14.-Cenote-Taj-Mahal.jpg&f=1&nofb=1&ipt=ed0af07812dd4788621ffd21144463a0cfbc55097bc2f845c74d94607e56aa8b&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc1%2F34%2Fa3%2Fc134a35bfe310ea0e33888e0de11a73d.jpg&f=1&nofb=1&ipt=d8dbaa994ad5f086d4004afb957713dde8fc5a27a262366e83f9436c9ed55dd1&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mexicodestinos.com%2Ftours%2FBuceo-Cenote-Taj-Mahal.jpg&f=1&nofb=1&ipt=d62cf20e9a165bd0fb5b65a22f7e48e5c371357036695012bc8316a65c9bd75d&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cenote Zapote',
        location: 'Rivera Maya, Mexico',
        details:
          'The bell-shaped stalactites decorate the walls. They are natural sculptures built by living organisms.Currently the bells continue their growth in the water. They are formed by bacteria breathing and solidifying in the calcid.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcenotesworld.com%2Fassets%2Fimages%2Ftours%2FCenotes-Zapote-Eco-Park_RCJC7O.jpeg&f=1&nofb=1&ipt=cc8e82d365f5d376aa9a552873094d504746d9ebff4f6cd97ce83b4d8ffcb06a&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmenteurbana.mx%2Fwp-content%2Fuploads%2F2017%2F04%2Fstock-photo-100226431.jpg&f=1&nofb=1&ipt=b17583909106a68a1e9223c3e54d58d787f07951367caef4ec55fc948f9d0b0c&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1Fb6nlNs1xk7OtOsNJ9ksgHaGF%26pid%3DApi&f=1&ipt=53bcdc2b34ada8b8d421f73890de928a4aad286b8d7196b53b145a8a56da4ceb&ipo=images',
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Turtle Cavern and Turtle Tomb',
        location: 'Sabah, Malaysia',
        details:
          'The entrance of Turtle Cavern is about 18m underwater. The cave first goes down in a bell shaped descending tunnel which leads to the second chamber. From there, there is another tunnel that connects to the Turtle Tomb.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.borneotourstravel.com%2Fwp-content%2Fuploads%2F2011%2F01%2FTurtle-Tomb-9-e1372755294373.jpg&f=1&nofb=1&ipt=bb46772f96eb906b24afd7be3c588dd3af08098a316b7fa969c197c95ac2ef10&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseaventuresdive.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fsipadan-turtle-tomb-seaventures.jpg&f=1&nofb=1&ipt=e61f21ca1d7ab1c7f1994f714f67f167a60136c10dd8b4e5b8a80764d8028d3b&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.asiadivingvacation.com%2Fimages%2Fdiving%2Fsipadan-island%2Fgallery%2Fturtle-tomb-entrance.jpg&f=1&nofb=1&ipt=73efb186647c12c996a0f22226713981f0b34da0d5bdfb6c10b29ca272ef6d64&ipo=images',
        countryId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paglugaban Cave',
        location: 'Palawan, Philippines',
        details:
          'The underwater cave system is made up of five chambers. The entrance sits at sea level and you’ll swim about 30 meters/100 feet until you reach the first chamber.',
        imageOne:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.divephotoguide.com%2Fimages%2Flightboximage%2Forig%2F1568605245.jpg&f=1&nofb=1&ipt=e2e6e59f46f1d21abab0f12b33f6863345b0c885e2e037d4a1426d17b7637b71&ipo=images',
        imageTwo:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.divephotoguide.com%2Fimages%2Flightboximage%2Fm%2F1568586512.jpg&f=1&nofb=1&ipt=002dd7154d72c272ec70e879d5a417572e39c6370d3124a2b5d9a7cd0bac9300&ipo=images',
        imageThree:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.divephotoguide.com%2Fimages%2Flightboximage%2Forig%2F1568586738.jpg&f=1&nofb=1&ipt=53262c2c03c18259105d0ccc6f7fb3f10aba5d6b7da7cc1ef19faec036b92644&ipo=images',
        countryId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('underwaters')
  }
}
