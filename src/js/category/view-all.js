import refs from './refs';

const { categoryMainContainer } = refs;

categoryMainContainer.addEventListener('click', foo);

function foo(e) {
  e.preventDefault();
}
