import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
  
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues?state=open&labels=blog`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    const issues = await response.json();
    
    const posts = issues.map((issue: any) => ({
      id: issue.number,
      title: issue.title,
      summary: issue.body?.substring(0, 150) + '...',
      date: issue.created_at,
      labels: issue.labels.map((l: any) => l.name),
      url: issue.html_url
    }));
    
    return {
      statusCode: 200,
      body: JSON.stringify(posts),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch blog posts' })
    };
  }
};
