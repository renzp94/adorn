<script>
  import { Typography } from 'adorn-ui'
  const { Title, Text, Link } = Typography
</script>

<Typography>
  <Title>Introduction</Title>
  <p>
    Welcome to the Svelte reference documentation! This is intended as a
    resource for people who already have some familiarity with Svelte and want
    to learn more about using it.
  </p>
  <p>
    If that's not you (yet), you may prefer to visit the interactive tutorial or
    the examples before consulting this reference.
    <Text strong>
      You can try Svelte online using the REPL. Alternatively, if you'd like a
      more fully-featured environment, you can try Svelte on StackBlitz
    </Text>
    .
  </p>
  <Title level={2}>Start a new project</Title>
  <p>
    We recommend using <Link href="https://kit.svelte.dev/">SvelteKit</Link>,
    the official application framework from the Svelte team:
  </p>
  <Text code>
    <div>npm create svelte@latest myapp</div>
    <div>cd myapp</div>
    <div>npm install</div>
    <div>npm run dev</div>
  </Text>
  <p>
    Press <Text keyboard>Esc</Text> to exit...
  </p>
</Typography>
