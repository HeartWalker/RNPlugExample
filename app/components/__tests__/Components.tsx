import React from 'react'
import renderer from 'react-test-renderer'

import Components from '../Components'

it('renders correctly with defaults', () => {
    const button = renderer.create(<Components/>).toJSON()
    expect(button).toMatchSnapshot()
})