import ContactsHeader from './ContactsHeader';
import defaultAvatar from '../assets/avatars';
import ContactsScreen from './ContactsScreen';
import $ContactsTableHeaderRow from './ContactsTableHeaderRow';
import ContactsTableRow, { ContactsTableRowProps } from './ContactsTableRow';
import StoryApp from '../app/StoryApp';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const MockHeader = () => (
  <StoryApp>
    <div style={{ width: '100%', height: '100%' }}>
      <ContactsHeader
        name='Alex Trust'
        email='alextrust31@gmail.com'
        profileSrc={defaultAvatar}
        onLogout={() => {
          toast('Logged Out!');
        }}
      />
    </div>
  </StoryApp>
);

let sampleContact: ContactsTableRowProps = {
  id: 'id',
  name: 'Alex Trust',
  email: 'alextrust31@gmail.com',
  phoneNo: '+91-9760689747',
  profileSrc: defaultAvatar,
};

const contacts = Array.from(new Array(20)).map((_, index) => {
  let { id, name, ...rest } = sampleContact;
  return {
    id: `${id}-${index}`,
    name: `${name}-${index}`,
    ...rest,
  };
});

export const MockContactsScreen = () => {
  const [hasMore, setHasMore] = useState(true);
  return (
    <ContactsScreen
      hasMore={hasMore}
      onLoadMore={async () => {
        toast('Call Load More!');
        setHasMore(false);
      }}
      header={{
        name: 'Alex Trust',
        email: 'alextrust31@gmail.com',
        profileSrc: defaultAvatar,
        onLogout: () => {
          toast('Logged Out!');
        },
      }}
      noOfContacts={170}
      data={contacts}
    />
  );
};

export const MockContactsRow = () => (
  <StoryApp>
    <div style={{ margin: 20, width: '100%' }}>
      <ContactsTableRow id='a1' name='Alex Trust' email='alextrust31@gmail.com' phoneNo='+91-9760689747' />
      <ContactsTableRow id='a2' name='Alex Trust 2' email='alextrust31@gmail.com' phoneNo='+91-9760689747' isStarred />
    </div>
  </StoryApp>
);

export const ContactsTableHeaderRow = () => <$ContactsTableHeaderRow />;

export default { title: 'Contacts Storybook' };
