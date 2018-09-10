import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import { configure, shallow } from 'enzyme'

import { Card } from './Card'

describe('Component: App', () => {
  let wrapper

  beforeEach(() => {
    configure({ adapter: new Adapter() })
    wrapper = shallow(<Card />)
  })

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
