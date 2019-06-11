import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('successfully adds a todo item to list', () => {
  const wrapper = mount(<App />);
  const todoLength = wrapper.find('li').length;

  wrapper.find('.todoEdit input[type="text"]').at(0)
    .simulate('change', { target: { value: 'test todo' } });
  wrapper.find('.todoEdit button').simulate('click');
  const todoLength2 = wrapper.find('li').length;
  expect(todoLength + 1).toEqual(todoLength2)
});
