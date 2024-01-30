/**
 * Hompage handler.
 * @author Divine Abbah <https://github.com/Divine Abbah>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
