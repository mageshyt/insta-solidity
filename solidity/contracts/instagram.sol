// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Instagram {
    string public name = "Instagram";
    uint public imageCount = 0; // to keep track of the number of images
     
    // struct of post
    struct Post {
        uint id;
        string url;
        string description;
        uint tipAmount;
        address payable author; // payable because we want to transfer money to the author
        address[] tipper; // to keep track of the number of tipper
    }

    // mapping of post
    mapping(uint => Post) public posts; // uint -> imageCount, Post -> struct Post

    // event postCreated
    event PostCreated(
        uint id,
        string url,
        string description,
        address payable author
    );

    // event tip

    event Tip(
        uint id,
        string url,
        string description,
        uint currentTip,
        uint tipAmount,
        address payable author
    );

    // create post
    function createPost(string memory _url, string memory _description) public   {
        // invalid address
        require(msg.sender != address(0x0), "Invalid address");

        // ! description length
        require(bytes(_description).length > 0, "Description is required");
        // create new post
        imageCount++;
        posts[imageCount] = Post(imageCount, _url, _description, 0, payable(msg.sender), new address[](0));

    }

       // tip post

    function TipPost(uint _postId) public payable{

        uint _tip_amount=msg.value;
        // ! check if post exists
        require(_postId > 0 && _postId <= imageCount, "Post does not exist");

        // ! check if tip amount is valid
        require(_tip_amount > 0, "Tip amount must be greater than 0");
        // ! check if tipper is not the author
        require(posts[_postId].author != msg.sender, "You cannot tip your own post");  
        // ! fetch post
        Post memory _post = posts[_postId];

        // ! fetch author
        address payable _author = _post.author;

        // ! pay the author by sending them Ether
        _author.transfer(_tip_amount); 

        // ! increment the tip amount
       _post.tipAmount = _post.tipAmount + _tip_amount;

        // ! update the post
        posts[_postId] = _post;

        // ! trigger an event
        emit Tip(_postId, _post.url, _post.description, _post.tipAmount, _tip_amount, _author);

    }
}