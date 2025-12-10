# Supabase 설정 가이드

## 1. 환경 변수 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=https://njqoujwautiusvglahzj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=여기에_실제_anon_key를_입력하세요
```

## 2. Supabase Anon Key 찾기

1. [Supabase Dashboard](https://supabase.com/dashboard)에 로그인
2. 프로젝트 선택 (njqoujwautiusvglahzj)
3. 왼쪽 메뉴에서 **Settings** → **API** 클릭
4. **Project API keys** 섹션에서 `anon` `public` 키 복사
5. `.env.local` 파일의 `NEXT_PUBLIC_SUPABASE_ANON_KEY`에 붙여넣기

## 3. 데이터베이스 테이블 생성

Supabase Dashboard에서 SQL Editor를 열고 다음 쿼리를 실행하세요:

```sql
-- pre_registrations 테이블 생성
CREATE TABLE pre_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- RLS (Row Level Security) 활성화
ALTER TABLE pre_registrations ENABLE ROW LEVEL SECURITY;

-- 누구나 삽입할 수 있도록 정책 생성 (읽기는 불가)
CREATE POLICY "Anyone can insert pre-registrations"
ON pre_registrations
FOR INSERT
TO anon
WITH CHECK (true);
```

## 4. 개발 서버 재시작

환경 변수를 추가한 후 개발 서버를 재시작하세요:

```bash
# 현재 서버 중지 (Ctrl+C)
# 다시 시작
npm run dev -- --webpack
```

## 5. 테스트

1. http://localhost:3000 접속
2. 페이지 하단의 "사전 등록하기" 섹션으로 스크롤
3. 전화번호 입력 후 제출
4. Supabase Dashboard → Table Editor → pre_registrations에서 데이터 확인

## 보안 참고사항

- ✅ `.env.local` 파일은 `.gitignore`에 포함되어 GitHub에 업로드되지 않습니다
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`는 클라이언트에서 사용 가능한 공개 키입니다
- ✅ RLS 정책으로 사용자는 데이터를 삽입만 할 수 있고 조회는 불가능합니다
- ⚠️ 실제 배포 시 Vercel 등의 플랫폼에서 환경 변수를 별도로 설정해야 합니다
