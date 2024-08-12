<div className="ml-20">
  <div className="border-slate-100 border-b-2">
    <div className=" text-blue-500 border-blue-900 border-b-2 w-36 p-3">
      Images Upload
    </div>
  </div>
  <div className="grid grid-cols-2 gap-20 my-10">
    <Component
      str1="Upload 1st Image"
      str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
      str3="uploadPhoto1"
      c1="u1"
      c2="i1"
      c3="p1"
      c4="n1"
      Size={1000}
    />
    <Component
      str1="Upload 2nd Image"
      str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
      str3="uploadPhoto2"
      c1="u2"
      c2="i2"
      c3="p2"
      c4="n2"
      Size={1000}
    />
    <Component
      str1="Upload 3rd Image"
      str2="Only 'jpg , jpeg', 'png format is allowed. Max 1 MB"
      str3="uploadPhoto3"
      c1="u3"
      c2="i3"
      c3="p3"
      c4="n3"
      Size={1000}
    />
  </div>
  <div className="border-slate-100 border-b-2 my-10">
    <div className=" text-blue-500 border-blue-900 border-b-2 w-52 p-3">
      Voice Recording Upload
    </div>
  </div>
  <div className="w-2/3">
    <Component
      str1="Upload Voice Recording"
      str2="Only 'mp3, wav, ogg, m4ac, acc' format is allowed. Max 3 MB"
      str3="uploadAudio"
      c1="u4"
      c2="i4"
      c3="p4"
      c4="n4"
      Size={3000}
    />
  </div>
  <div className="border-slate-100 border-b-2 my-10">
    <div className=" text-blue-500 border-blue-900 border-b-2 w-32 p-3">
      Video Upload
    </div>
  </div>
  <div className=" w-2/3">
    <Component
      str1="Upload Video"
      str2="Only 'mp4 , mpeg, avi' format is allowed. Max 5MB"
      str3="uploadVideo"
      c1="u5"
      c2="i5"
      c3="p5"
      c4="n5"
      Size={5000}
    />
  </div>
  <div className="flex space-x-10 my-10">
    <button className="border-2 border-blue-400 rounded-md p-3 w-24 text-blue-700">
      Reset
    </button>
    <button className="p-3 w-24 bg-slate-100 text-slate-400 rounded-md">
      Submit
    </button>
  </div>
</div>;
