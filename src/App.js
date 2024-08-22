import React, {useState} from 'react'
import ShareSection from './Components/ShareSection'
import OptionCorrespond from './Components/OptionCorrespond';

function App() {

  // Declare postType and setPostType
  var [postType, setPostType] = useState('question'); // Default to 'question'

  return (
    <div>
        {/* Pass both postType and setPostType to the ShareSection */}
        <ShareSection postType = {postType} setPostType = {setPostType} />

        {/* Pass the updated vaule postType from the ShareSection to the global value to the OutcomeCorrespond */}
        <OptionCorrespond postType={postType} />
    </div>
  );
}

export default App;
