(function() {
    var type_impls = Object.fromEntries([["libp2p_networking",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Behaviour%3CTCodec%3E\" class=\"impl\"><a href=\"#impl-Behaviour%3CTCodec%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TCodec&gt; Behaviour&lt;TCodec&gt;<div class=\"where\">where\n    TCodec: Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_codec\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_codec</a>&lt;I&gt;(\n    codec: TCodec,\n    protocols: I,\n    cfg: Config,\n) -&gt; Behaviour&lt;TCodec&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (&lt;TCodec as Codec&gt;::Protocol, ProtocolSupport)&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Behaviour</code> for the given\nprotocols, codec and configuration.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send_request\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">send_request</a>(\n    &amp;mut self,\n    peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    request: &lt;TCodec as Codec&gt;::Request,\n) -&gt; OutboundRequestId</h4></section></summary><div class=\"docblock\"><p>Initiates sending a request.</p>\n<p>If the targeted peer is currently not connected, a dialing\nattempt is initiated and the request is sent as soon as a\nconnection is established.</p>\n<blockquote>\n<p><strong>Note</strong>: In order for such a dialing attempt to succeed,\nthe <code>RequestResonse</code> protocol must either be embedded\nin another <code>NetworkBehaviour</code> that provides peer and\naddress discovery, or known addresses of peers must be\nmanaged via [<code>Behaviour::add_address</code>] and\n[<code>Behaviour::remove_address</code>].</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send_response\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">send_response</a>(\n    &amp;mut self,\n    ch: <a class=\"struct\" href=\"libp2p_networking/reexport/struct.ResponseChannel.html\" title=\"struct libp2p_networking::reexport::ResponseChannel\">ResponseChannel</a>&lt;&lt;TCodec as Codec&gt;::Response&gt;,\n    rs: &lt;TCodec as Codec&gt;::Response,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, &lt;TCodec as Codec&gt;::Response&gt;</h4></section></summary><div class=\"docblock\"><p>Initiates sending a response to an inbound request.</p>\n<p>If the <a href=\"libp2p_networking/reexport/struct.ResponseChannel.html\" title=\"struct libp2p_networking::reexport::ResponseChannel\"><code>ResponseChannel</code></a> is already closed due to a timeout or the\nconnection being closed, the response is returned as an <code>Err</code> for\nfurther handling. Once the response has been successfully sent on the\ncorresponding connection, [<code>Event::ResponseSent</code>] is\nemitted. In all other cases [<code>Event::InboundFailure</code>]\nwill be or has been emitted.</p>\n<p>The provided <code>ResponseChannel</code> is obtained from an inbound\n[<code>Message::Request</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_address\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">add_address</a>(&amp;mut self, peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>, address: <a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use <code>Swarm::add_peer_address</code> instead.</span></div></span></summary><div class=\"docblock\"><p>Adds a known address for a peer that can be used for\ndialing attempts by the <code>Swarm</code>, i.e. is returned\nby [<code>NetworkBehaviour::handle_pending_outbound_connection</code>].</p>\n<p>Addresses added in this way are only removed by <code>remove_address</code>.</p>\n<p>Returns true if the address was added, false otherwise (i.e. if the\naddress is already in the list).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_address\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">remove_address</a>(&amp;mut self, peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>, address: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>)</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Will be removed with the next breaking release and won’t be replaced.</span></div></span></summary><div class=\"docblock\"><p>Removes an address of a peer previously added via [<code>Behaviour::add_address</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_connected\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_connected</a>(&amp;self, peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks whether a peer is currently connected.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_pending_outbound\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_pending_outbound</a>(\n    &amp;self,\n    peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    request_id: &amp;OutboundRequestId,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks whether an outbound request to the peer with the provided\n<a href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\"><code>PeerId</code></a> initiated by [<code>Behaviour::send_request</code>] is still\npending, i.e. waiting for a response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_pending_inbound\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_pending_inbound</a>(\n    &amp;self,\n    peer: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    request_id: &amp;InboundRequestId,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks whether an inbound request from the peer with the provided\n<a href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\"><code>PeerId</code></a> is still pending, i.e. waiting for a response by the local\nnode through [<code>Behaviour::send_response</code>].</p>\n</div></details></div></details>",0,"libp2p_networking::network::cbor::Behaviour"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Behaviour%3CTCodec%3E\" class=\"impl\"><a href=\"#impl-Behaviour%3CTCodec%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TCodec&gt; Behaviour&lt;TCodec&gt;<div class=\"where\">where\n    TCodec: Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>&lt;I&gt;(protocols: I, cfg: Config) -&gt; Behaviour&lt;TCodec&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (&lt;TCodec as Codec&gt;::Protocol, ProtocolSupport)&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Behaviour</code> for the given protocols and configuration, using <a href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html\" title=\"trait core::default::Default\"><code>Default</code></a> to construct the codec.</p>\n</div></details></div></details>",0,"libp2p_networking::network::cbor::Behaviour"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NetworkBehaviour-for-Behaviour%3CTCodec%3E\" class=\"impl\"><a href=\"#impl-NetworkBehaviour-for-Behaviour%3CTCodec%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TCodec&gt; NetworkBehaviour for Behaviour&lt;TCodec&gt;<div class=\"where\">where\n    TCodec: Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.ConnectionHandler\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ConnectionHandler\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">ConnectionHandler</a> = Handler&lt;TCodec&gt;</h4></section></summary><div class='docblock'>Handler for all the protocols the network behaviour supports.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ToSwarm\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ToSwarm\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">ToSwarm</a> = Event&lt;&lt;TCodec as Codec&gt;::Request, &lt;TCodec as Codec&gt;::Response&gt;</h4></section></summary><div class='docblock'>Event generated by the <code>NetworkBehaviour</code> and that the swarm will report back.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_established_inbound_connection\" class=\"method trait-impl\"><a href=\"#method.handle_established_inbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">handle_established_inbound_connection</a>(\n    &amp;mut self,\n    connection_id: ConnectionId,\n    peer: <a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    _: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>,\n    _: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Behaviour&lt;TCodec&gt; as NetworkBehaviour&gt;::ConnectionHandler, ConnectionDenied&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every established inbound connection. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_pending_outbound_connection\" class=\"method trait-impl\"><a href=\"#method.handle_pending_outbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">handle_pending_outbound_connection</a>(\n    &amp;mut self,\n    _connection_id: ConnectionId,\n    maybe_peer: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>&gt;,\n    _addresses: &amp;[<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>],\n    _effective_role: Endpoint,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>&gt;, ConnectionDenied&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every outbound connection attempt. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_established_outbound_connection\" class=\"method trait-impl\"><a href=\"#method.handle_established_outbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">handle_established_outbound_connection</a>(\n    &amp;mut self,\n    connection_id: ConnectionId,\n    peer: <a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    remote_address: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>,\n    _: Endpoint,\n    _: PortUse,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Behaviour&lt;TCodec&gt; as NetworkBehaviour&gt;::ConnectionHandler, ConnectionDenied&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every established outbound connection. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_swarm_event\" class=\"method trait-impl\"><a href=\"#method.on_swarm_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_swarm_event</a>(&amp;mut self, event: FromSwarm&lt;'_&gt;)</h4></section></summary><div class='docblock'>Informs the behaviour about an event from the <a href=\"crate::Swarm\"><code>Swarm</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_connection_handler_event\" class=\"method trait-impl\"><a href=\"#method.on_connection_handler_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_connection_handler_event</a>(\n    &amp;mut self,\n    peer: <a class=\"struct\" href=\"libp2p_networking/reexport/struct.PeerId.html\" title=\"struct libp2p_networking::reexport::PeerId\">PeerId</a>,\n    connection: ConnectionId,\n    event: &lt;&lt;Behaviour&lt;TCodec&gt; as NetworkBehaviour&gt;::ConnectionHandler as ConnectionHandler&gt;::ToBehaviour,\n)</h4></section></summary><div class='docblock'>Informs the behaviour about an event generated by the [<code>ConnectionHandler</code>]\ndedicated to the peer identified by <code>peer_id</code>. for the behaviour. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method trait-impl\"><a href=\"#method.poll\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll</a>(\n    &amp;mut self,\n    _: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;ToSwarm&lt;&lt;Behaviour&lt;TCodec&gt; as NetworkBehaviour&gt;::ToSwarm, &lt;&lt;Behaviour&lt;TCodec&gt; as NetworkBehaviour&gt;::ConnectionHandler as ConnectionHandler&gt;::FromBehaviour&gt;&gt;</h4></section></summary><div class='docblock'>Polls for things that swarm should do. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_pending_inbound_connection\" class=\"method trait-impl\"><a href=\"#method.handle_pending_inbound_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">handle_pending_inbound_connection</a>(\n    &amp;mut self,\n    _connection_id: ConnectionId,\n    _local_addr: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>,\n    _remote_addr: &amp;<a class=\"struct\" href=\"libp2p_networking/reexport/struct.Multiaddr.html\" title=\"struct libp2p_networking::reexport::Multiaddr\">Multiaddr</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, ConnectionDenied&gt;</h4></section></summary><div class='docblock'>Callback that is invoked for every new inbound connection. <a>Read more</a></div></details></div></details>","NetworkBehaviour","libp2p_networking::network::cbor::Behaviour"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18899]}