const {Builder} = require('selenium-webdriver');

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {        
        (async function myFunction() {
           let driver = await new Builder().forBrowser('internet explorer').build();
           try {
            //  Navega a la URL
            await driver.get('https://www.google.com');
        
            // Inserta el texto "Webdriver" y ejecuta la accion del teclado "ENTER"
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);
            let TituloActual = await driver.getTitle();
          }
          finally {
            await driver.quit();
          }
        })();
      assert.equal(TituloActual, 'Inicio');
    });
  });
});