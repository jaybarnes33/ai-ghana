import Banner from "@/components/Banner";
import { GET_USER_ARTICLES } from "@/graphql/constant";
import { gql } from "@/graphql/gql";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = ({ posts }: { posts: Record<string, any>[] }) => {
  return (
    <div>
      <Banner title="Blog" image="/about.jpg" />

      <Container>
        <h1 className="text-center">
          Latest <span className="text-primary">Articles</span>
        </h1>
        <Row className="mt-2">
          {posts?.map((post) => (
            <Col xs={6} md={4} key={post.slug} className="shadow py-3 px-3">
              <h2>{post.title}</h2>
              <p>{post.brief}</p>
              <span className="text-primary">Read more &rarr;</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export async function getStaticProps(context) {
  const {
    data: {
      user: {
        publication: { posts },
      },
    },
  } = await gql(GET_USER_ARTICLES, { page: 0 });
  console.log(posts);
  return {
    props: {
      posts,
    },
    revalidate: 1,
    // will be passed to the page component as props
  };
}

export default Blog;
