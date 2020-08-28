import React from 'react'
import {render} from 'react-native-testing-library'
import App from '../App'

// Ran out of time to add unit tests

describe('<App />', () => {
    it('should match snapshot', ()=> {
        const result = render(<App />).toJSON()
        expect(result).toMatchSnapshot()
    })
})

