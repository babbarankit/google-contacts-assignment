import Avatar from '.';
import StoryApp from '../../app/StoryApp';

let avatarSrc =
  'data:image/png;base64,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';

const AvatarWrapper: React.SFC<{ label: string }> = ({ label, children }) => (
  <div style={{ display: 'flex', alignContent: 'center', padding: 10 }}>
    {children}
    <div style={{ margin: 10 }}>{label}</div>
  </div>
);

const Size54 = () => <Avatar size={54} borderSize={2} src={avatarSrc} />;

const Size40 = () => <Avatar size={40} borderSize={1} src={avatarSrc} />;

const Size40Starred = () => <Avatar size={40} borderSize={1} src={avatarSrc} isStarred />;

export const Avatars = () => (
  <StoryApp>
    <div>
      <AvatarWrapper label='Size 54'>
        <Size54 />
      </AvatarWrapper>
      <AvatarWrapper label='Size 40'>
        <Size40 />
      </AvatarWrapper>
      <AvatarWrapper label='Size 40 Star'>
        <Size40Starred />
      </AvatarWrapper>
    </div>
  </StoryApp>
);

export default { title: 'Avatar Stories' };
