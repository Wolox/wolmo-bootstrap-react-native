import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import { Login } from '@app/screens/Login/layout';

describe('<Login />', () => {
  test('without errors', () => {
    const onLogin = jest.fn();
    const wrapper = shallow(<Login onLogin={onLogin} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(CustomTextInput)).toHaveLength(2);
    expect(wrapper.find(CustomButton)).toHaveLength(1);
  });
});
