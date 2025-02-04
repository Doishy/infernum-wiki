import { read } from '@korumite/kiwi/server';

import { Markdown } from '@/components/Markdown/Markdown';

export default function Sandbox() {
  const { text, title } = read('sandbox.md');
  return <Markdown markdown={text} title={title} />;
}
