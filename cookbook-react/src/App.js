var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_2 = __importDefault(require('react'));
require('./App.css');
function App() {
  return react_2.default.createElement(
    'div',
    { className: 'App' },
    react_2.default.createElement('p', null, 'Hi'),
  );
}
exports.default = App;
