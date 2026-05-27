export async function getSystemPrompt(langfuse) {
  try {
    if (langfuse) {
      const prompt = await langfuse.getPrompt('chatbot-system', undefined, {
        type: 'text', label: 'production', cacheTtlSeconds: 300,
      })
      return { text: prompt.prompt, version: prompt.version }
    }
  } catch { /* fallback to env */ }
  const fallback = process.env.CHATBOT_SYSTEM_PROMPT
  if (!fallback) throw new Error('No prompt source available (set CHATBOT_SYSTEM_PROMPT or configure Langfuse)')
  return { text: fallback, version: 'env' }
}
