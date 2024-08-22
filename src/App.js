import React, {useState} from 'react'
import UserChoice from './Components/UserChoice'
import OptionCorrespond from './Components/OptionCorrespond';

function App() {

  // Declare postType and setPostType
  var [postType, setPostType] = useState('question'); // Set 'question' as default

  return (
    <div>
        {/* Pass both postType and setPostType to the ShareSection */}
        <UserChoice postType = {postType} setPostType = {setPostType} />

        {/* Pass the updated vaule postType from the ShareSection to the global value to the OutcomeCorrespond */}
        <OptionCorrespond postType={postType} />
    </div>
  );
}

export default App;
