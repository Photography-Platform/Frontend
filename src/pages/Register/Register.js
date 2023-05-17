import React from 'react'

import styles from './Frame.module.css'

const Register = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['frame']}>
        <div className={styles['frame7']}>
          <div className={styles['frame8']}>
            <span className={styles['text']}>
              <span>帳號:</span>
            </span>
          </div>
          <div className={styles['frame9']}>
            <span className={styles['text02']}>
              <span>
                <span>再次確認密碼:</span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <div className={styles['frame10']}>
            <span className={styles['text07']}>
              <span>
                <span>密碼:</span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <div className={styles['component2']}>
            <span className={styles['text12']}>
              <span>註冊</span>
            </span>
          </div>
        </div>
        <div className={styles['frame1']}>
          <div className={styles['component21']}>
            <span className={styles['text14']}>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register