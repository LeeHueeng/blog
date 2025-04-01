"use client";

import React from "react";

interface PostPageProps {
  params: Promise<{
    categoryId: string;
    postId: string;
  }>;
}

// 예시 데이터 (실제 구현에서는 API나 DB에서 데이터를 받아옵니다)
const samplePost = {
  title: "샘플 게시글 제목",
  content: `
    <div style="text-align:center; color:#2c3e50;">
      <h2>여행의 시작</h2>
      <p style="font-size: 1.2em;">도시의 소음과 분주함에 지친 나에게, 여행은 새로운 희망과 재충전의 기회를 주었습니다. 이번 여행은 단순한 휴식 이상의 의미를 담고 있었습니다.</p>
    </div>
    <div style="text-align:left; margin: 20px 0;">
      <h2 style="color:#e74c3c;">도시를 떠나</h2>
      <p>바쁘게 살아가는 현대인의 삶 속에서 한걸음 물러서서 자연의 품에 안기고 싶었던 저는, 오래 전부터 꿈꿔온 여행을 결심하게 되었습니다. 첫 발걸음을 내딛는 순간부터 마음 한켠에서는 설렘과 두려움이 공존했습니다.</p>
    </div>
    <div style="text-align:center;">
      <img src="https://picsum.photos/seed/travel/700/300" alt="도시 탈출 이미지" style="border: 5px solid #3498db; border-radius: 10px;" />
    </div>
    <div style="text-align:justify; color:#34495e;">
      <h2>자연과의 만남</h2>
      <p>푸른 숲과 맑은 계곡이 펼쳐진 자연 속에서 저는 잊고 지냈던 감정을 다시 찾았습니다. 새들의 지저귐, 바람의 속삭임, 그리고 자연의 향기는 제 마음에 깊은 울림을 주었습니다. 이곳에서의 하루하루는 마치 시간이 멈춘 듯한 평화로움이 있었습니다.</p>
    </div>
    <div style="text-align:center; margin: 20px 0;">
      <h2 style="color:#8e44ad;">작은 마을에서의 휴식</h2>
      <p style="font-style: italic;">여행 도중 들른 작은 마을은 따뜻한 미소와 정겨운 인사로 저를 맞이했습니다. 그곳 사람들은 삶의 소소한 기쁨을 나누며, 각자의 이야기를 들려주었습니다. 현지 시장에서 맛본 신선한 농산물과 정성스레 준비된 음식은 잊을 수 없는 맛의 경험을 선사했습니다.</p>
      <img src="https://picsum.photos/seed/village/700/300" alt="작은 마을 이미지" style="max-width:100%; margin-top:10px;" />
    </div>
    <div style="text-align:left;">
      <h2 style="color:#27ae60;">맛의 향연</h2>
      <p>지역의 특산물을 맛보며, 그 땅의 역사와 문화를 느낄 수 있었습니다. 오래된 전통이 담긴 요리 하나하나는 그 자체로 예술이었으며, 한 입 한 입마다 여행의 즐거움이 배어 있었습니다. 음식과 함께한 대화는 이곳의 문화를 더욱 생생하게 전달해 주었습니다.</p>
    </div>
    <div style="text-align:justify;">
      <h2>자연 속에서의 명상</h2>
      <p>한적한 숲 속에서 혼자만의 시간을 보내며, 스스로를 돌아보는 시간을 가졌습니다. 명상의 시간은 마음의 평화를 가져다주었고, 다시 일상으로 돌아갈 힘과 용기를 불어넣어 주었습니다. 그 순간만큼은 세상의 모든 소음이 사라진 듯 했습니다.</p>
    </div>
    <div style="text-align:center;">
      <h2 style="color:#d35400;">여행의 하이라이트</h2>
      <p>여행의 가장 큰 하이라이트는 바로 현지에서 경험한 다양한 문화와 사람들과의 소통이었습니다. 그들의 삶의 방식, 따뜻한 인심, 그리고 공유하는 이야기는 제 인생에 큰 영향을 주었습니다. 서로 다른 배경을 가진 사람들이 한데 모여 만들어내는 다채로운 풍경은 이 여행의 보물이었습니다.</p>
    </div>
    <div style="text-align:center; background-color:#ecf0f1; padding:20px; border-radius:8px;">
      <h2>영상으로 만나는 기억</h2>
      <p>아래의 영상을 통해, 여행 중 만난 아름다운 순간들을 다시 한 번 느껴보실 수 있습니다.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="여행 영상" frameborder="0" allowfullscreen style="margin-top:10px;"></iframe>
    </div>
    <div style="text-align:justify; margin-top:20px;">
      <h2 style="color:#2980b9;">여행을 마치며</h2>
      <p>이 긴 여정은 제 인생의 한 페이지를 장식하는 소중한 경험이었습니다. 다시 도시로 돌아가는 길에, 그때의 감동과 여운은 오래도록 저의 마음속에 남아있을 것입니다. 여행을 통해 얻은 새로운 시각과 경험은 앞으로의 삶에 큰 영감을 줄 것이라 믿습니다.</p>
      <p>이번 여행은 단순한 휴식이 아니라, 제 자신을 재발견하고 미래를 향한 도전을 위한 새로운 시작이었습니다. 시간이 지나도 잊지 못할 이 경험은 언제나 제 마음속 깊은 곳에 자리잡고 있을 것입니다.</p>
      <p>더불어, 이번 여정에서는 예상치 못한 우연과 만남들이 연달아 찾아와 저에게 많은 깨달음을 주었습니다. 길을 잃은 순간들이 오히려 새로운 발견으로 이어졌고, 작은 실수들이 더 큰 배움의 기회가 되었습니다. 이 모든 경험들이 모여 제 인생의 소중한 한 페이지를 완성하였습니다.</p>
      <p>여행 중 만난 사람들의 따뜻한 이야기와 그들이 전해준 희망은 지금도 제 가슴 한 켠에 생생하게 남아 있습니다. 그들의 웃음과 눈물, 그리고 진심 어린 인사는 평생 잊지 못할 추억으로 남을 것입니다.</p>
    </div>
  `,

  createdAt: "2025-04-01",
  author: "후에엥",
  likes: 42,
  comments: 7,
  views: 123,
};

export default function PostPage({ params }: PostPageProps) {
  const { categoryId, postId } = React.use(params);

  // 실제 구현 시에는 postId, categoryId를 이용해 데이터를 가져오면 됩니다.
  return (
    <div className="w-full my-5">
      <article className="max-w-[1500px] mx-auto p-8 shadow-md rounded-lg mt-10 ">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold ">{samplePost.title}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm ">
            <span>작성일: {samplePost.createdAt}</span>
            <span>작성자: {samplePost.author}</span>
            <span>카테고리: {categoryId}</span>
            <span>게시글 ID: {postId}</span>
          </div>
          <div className="mt-2 flex gap-4 text-sm ">
            <span>좋아요: {samplePost.likes}</span>
            <span>댓글수: {samplePost.comments}</span>
            <span>조회수: {samplePost.views}</span>
          </div>
        </header>
        <section
          className="prose"
          dangerouslySetInnerHTML={{ __html: samplePost.content }}
        />
      </article>
    </div>
  );
}
