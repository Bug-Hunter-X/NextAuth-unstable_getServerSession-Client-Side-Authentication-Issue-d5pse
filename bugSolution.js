```javascript
// pages/api/session.js
import {unstable_getServerSession} from "next-auth/next";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, options);
  res.json(session);
};

export default handler;

//pages/protected.js
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ProtectedPage() {
  const { data: session, error } = useSWR('/api/session', fetcher);

if (error) return <div>failed to load</div>;
if (!session) return <div>session is not loaded yet</div>;
  return (
    <div>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}
export default ProtectedPage;
```