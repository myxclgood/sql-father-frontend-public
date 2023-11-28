import {
  BugOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 *
 * @author https://github.com/liyupi
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="default-footer"
      copyright={`${currentYear} 刘明珠`}
      links={[
        {
          key: 'master',
          title: (
            <>
              <UserOutlined /> 站长：SQL教父-刘明珠
            </>
          ),
          href: '/',
          blankTarget: true,
        },
        {
          key: 'learn',
          title: (
            <>
              <SketchOutlined /> 喜欢看电视
            </>
          ),
          href: '/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 梦想开挖掘机
            </>
          ),
          href: '/',
          blankTarget: true,
        },
        {
          key: 'feedback',
          title: (
            <>
              <BugOutlined /> 喜欢范丽琴
            </>
          ),
          href: '/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
