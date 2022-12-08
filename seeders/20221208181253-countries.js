'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('countries', [
      {
        name: 'United States',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Famerica-flag-pic.jpg&f=1&nofb=1&ipt=bb9dd50254e23ad97cbe3c39b439d204ba024b46de82481b6aeae8cf4848af12&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mexico',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yourpersonalinjuryfirm.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fmexican-flag-3001452_1920.png&f=1&nofb=1&ipt=3dba55797012df067b84777e97f223907d70e5d8d3c40e0b43c7db63955aa994&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guatemala',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4210831.jpg&f=1&nofb=1&ipt=d71ce39d92420edac3fecc7c82b4434090463f3dcc4ff01dbc2eae29889cbbfe&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Zealand',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F5450c5e5eab8eaf94f47b0ff%2Fimage.jpg&f=1&nofb=1&ipt=3593aad86f5d2b41fc9966414bf6fcbc3cf0097c76e7e1600cee48afee631315&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scotland',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rG4tmCv-QVp6phZIPN2YzgHaE7%26pid%3DApi&f=1&ipt=af73468e008e86612ed59dc4f144a4486ec162d82c150455021cc6a11d03b7d5&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Malaysia',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-HrLXnjMCWQA%2FUsEh4YnQvPI%2FAAAAAAAACko%2FHjlBEDFpHDM%2Fs1600%2FMalaysia%2Bflag.jpg&f=1&nofb=1&ipt=50401a9fc621bd98428184c90aa81bd424c38c8bed8a7d2e72afb51662033d6d&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Philippines',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2023826.jpg&f=1&nofb=1&ipt=d95b350df946c74e636de008e4d7229ceeaefed0e7cb9105c66fb853d9a4f4de&ipo=images',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('countries')
  }
}
