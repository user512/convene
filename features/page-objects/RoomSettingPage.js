const Page = require("./Page");
const { By, until } = require('selenium-webdriver');

class RoomSettingPage extends Page {
  constructor(driver, room) {
    super(driver);
    this.room = room;
  }

  async setAccessLevel(accessLevel) {
    const selectSelector = By.id('room_access_level');
    await this.driver.wait(until.elementLocated(selectSelector));
    const accessLevelSelect = await this.driver.findElement(selectSelector);
    accessLevelSelect.click();

    const accessLevelSelector = By.css(`[value=${accessLevel}]`);
    await this.driver.wait(until.elementsLocated(accessLevelSelector));
    const accessLevelOption = await this.driver.findElement(accessLevelSelector)
    accessLevelOption.click();
  }

  async accessCodeInput() {
    const accessCodeInput = By.id('room_access_code')
    await this.driver.wait(until.elementLocated(accessCodeInput));
    return await this.driver.findElement(accessCodeInput);
  }
}

module.exports = RoomSettingPage;
