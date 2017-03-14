import React from 'react';
import './../assets/styles/preview.css';

const Preview = ({html}) => (
  <div id="react-root" className='md-preview'>
    <div data-reactroot="" className='preview'>
      <div className='preview-container'>
        <div className='preview-container-bg'>
          <div className='preview-container-inner-bg'>
            <div>
              <div className="preview-content-box">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
)

export default Preview;
