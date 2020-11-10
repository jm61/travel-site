import '../styles/styles.css';
import Person from './modules/Person';

if (module.hot) {
  module.hot.accept()
}
// Lesson

 let john = new Person("john doe","pink");
 let maria = new Person("maria portugues","khaki");

 john.greet();
 maria.greet();
