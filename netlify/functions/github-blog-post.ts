import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const issueNumber = event.queryStringParameters?.id;
  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
  
  if (!issueNumber) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Issue ID is required' })
    };
  }
  
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues/${issueNumber}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    const issue = await response.json();
    
    const post = {
      id: issue.number,
      title: issue.title,
      content: issue.body,
      date: issue.created_at,
      updated: issue.updated_at,
      labels: issue.labels.map((l: any) => l.name),
      author: issue.user.login,
      comments: issue.comments
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch blog post' })
    };
  }
};
